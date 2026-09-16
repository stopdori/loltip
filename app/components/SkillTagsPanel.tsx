// app/components/SkillTagsPanel.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { TAG_LABEL, TAG_DESC, type SkillKey, type TagId } from "../data/interactions";
import { GIMMICK_TAG_LABEL, GIMMICK_TAG_DESC, type GimmickTagId } from "../data/interactions/tags_gimmick";
import type { GimmickSkillData } from "../data/interactions/types";
import { CHAMPS } from "../data/champs/_index";
import { CHAMP_FORMS, hasForms } from "../data/interactions/forms";
import { useChampSpells } from "@/app/lib/useChampSpells";
import { stripHtml, resolvePlaceholders, applyTextOverrides, toDdragonId } from "@/app/lib/ddragon";
import { toneOfTag } from "../data/interactions/tagTone";
import { STAT_ICONS } from "../data/interactions/statIcons";
import TokenText from "./TokenText";
import TagPill from "./TagPill";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// CHAMP_FORMS는 배열 기반(0~4번 인덱스, 몇 개든 가능)이지만, 챔피언
// 파일의 실제 skills/vision/gimmick 데이터는 base/alt/alt2/alt3/alt4
// 고정 키 구조다(app/data/interactions/types.ts의 MultiForms 등 — 최대
// 5폼까지 확장됨, 아펠리오스 대응). 탭 인덱스(formIndex)를 그 고정 키로
// 변환하는 매핑.
const FORM_DATA_KEYS = ["base", "alt", "alt2", "alt3", "alt4"] as const;
type FormDataKey = (typeof FORM_DATA_KEYS)[number];

// SEPARATOR_NEWLINE을 구분자로 삼아 태그 배열을 "줄 그룹" 배열로 나눈다
// (SEPARATOR_NEWLINE 자체는 결과에 포함되지 않는다 — 순수 구분자 역할).
// 스페이서 엘리먼트 + 음수 마진으로 줄바꿈 간격을 흉내내던 방식을 대체한다:
// 그룹마다 독립된 flex flex-wrap 컨테이너로 그리고 바깥에서 flex-col +
// gap-y로 쌓으면, 그룹 내부 자연 줄바꿈과 그룹 간 간격이 같은 gap-y 값
// 하나로만 결정되어 브라우저 편차 없이 항상 정확히 일치한다.
function splitIntoLineGroups(
  tags: (TagId | GimmickTagId)[]
): (TagId | GimmickTagId)[][] {
  const groups: (TagId | GimmickTagId)[][] = [[]];
  for (const t of tags) {
    if (t === "SEPARATOR_NEWLINE") {
      groups.push([]);
    } else {
      groups[groups.length - 1].push(t);
    }
  }
  return groups.filter((g) => g.length > 0);
}

function SkillLabelWithTip({
  labelText,
  tip,
  champId,
  skillKey,
  forceCompact,
  lang,
  iconOverride,
  labelOverride,
}: {
  labelText: string;
  tip?: string;
  champId: string | null;
  skillKey: SkillKey;
  /** undefined면 직접 페이지(실제 vw를 신뢰 가능) → vw 기반 폭 계산.
   *  true/false면 iframe(embed) 컨텍스트 → iframe 내부 vw는 부모 페이지의
   *  실제 뷰포트를 반영 못 하므로 vw 대신 고정폭 두 단계로 대체. */
  forceCompact?: boolean;
  /** tip을 TokenText로 렌더링할 때 쓸 언어. 하드코딩된 skillTooltip 문장에
   *  [[TAG]] 토큰이 들어갈 수 있어 태그 툴팁까지 연결하려면 필요하다. */
  lang: "ko" | "en";
  /** 있으면 기본 로컬 아이콘(/spells/{champId}/{skillKey}.webp) 대신
   *  이 URL을 쓴다. 흐웨이처럼 선택된 폼(화풍)에 따라 Q/W/E 슬롯 자체가
   *  다른 서브스킬 아이콘으로 바뀌어야 하는 챔피언을 위한 것
   *  (forms.ts의 ChampForm.skillIcons). 없으면 기존과 완전히 동일. */
  iconOverride?: string;
  /** 있으면 아이콘 위 오버랩 워터마크 글자(기본 labelText, 보통 "Q" 등
   *  스킬키 한 글자)를 이 문자열로 대체한다. 흐웨이의 QQ/QW/QE 같은
   *  화풍별 조합 표기를 위한 것(forms.ts의 ChampForm.skillLabels).
   *  없으면 기존과 완전히 동일(labelText 그대로). */
  labelOverride?: string;
}) {
  const iconSrc = iconOverride ?? (champId ? `/spells/${champId}/${skillKey}.webp` : "");
  const watermarkText = labelOverride ?? labelText;
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    arrowLeft: number;
    /** 기본은 앵커 위("above")에 띄우지만, 위쪽 여유 공간이 툴팁 높이보다
     *  부족하면(흐웨이처럼 문장이 길어서 iframe 위쪽에서 잘리는 경우) 아래로
     *  뒤집어("below") 띄운다. */
    placement: "above" | "below";
  } | null>(null);

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 12;
    const anchorCenterX = a.left + a.width / 2;

    const left = clamp(
      anchorCenterX,
      margin + t.width / 2,
      vw - margin - t.width / 2
    );

    // 위쪽 공간이 충분하면(기존과 동일) 위에 띄우고, 부족하면 아래로
    // 뒤집는다 — 단, 아래쪽도 더 좁으면(둘 다 부족한 극단적인 경우) 그래도
    // 더 넓은 쪽을 택한다.
    const spaceAbove = a.top - margin;
    const spaceBelow = vh - a.bottom - margin;
    const placement: "above" | "below" =
      spaceAbove >= t.height + 10 || spaceAbove >= spaceBelow ? "above" : "below";

    const top = placement === "above" ? a.top - 10 : a.bottom + 10;

    const arrowLeft = clamp(
      anchorCenterX - (left - t.width / 2),
      10,
      t.width - 10
    );

    setPos({ left, top, arrowLeft, placement });
  };

  const onEnter = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });
  };

  const onLeave = () => {
    setOpen(false);
    setPos(null);
  };

  useEffect(() => {
    if (!open) return;
    const close = (e: TouchEvent) => {
      if (!anchorRef.current?.contains(e.target as Node)) onLeave();
    };
    document.addEventListener("touchstart", close);
    return () => document.removeEventListener("touchstart", close);
  }, [open]);

  // 툴팁이 열린 채로 스크롤해서 앵커가 화면 밖으로 완전히 벗어나면
  // 자동으로 닫는다. open일 때만 observe하고, 닫히면 disconnect.
  useEffect(() => {
    if (!open) return;
    const el = anchorRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) onLeave();
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [open]);

  // P/Q/W/E/R 아이콘 + 반투명 워터마크 글자 오버레이
  const watermarkTone =
    skillKey === "R"
      ? "text-yellow-400/85"
      : skillKey === "P"
      ? "text-slate-200/85"
      : "text-sky-300/85";

  const iconVisual = (
    <span className="relative block w-10 h-10 rounded-lg overflow-hidden ring-1 ring-white/10 bg-slate-900/50">
      {iconSrc && (
        <img
          src={iconSrc}
          alt={skillKey}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center font-black ${
          watermarkText.length >= 2 ? "text-lg" : "text-xl"
        } ${watermarkTone}`}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000",
        }}
      >
        {watermarkText}
      </span>
    </span>
  );

  if (!tip) return iconVisual;

  // iframe(embed) 안에서는 100vw가 부모 페이지가 아니라 iframe 자신의
  // 좁은 내부 뷰포트(최대 430px)를 기준으로 계산돼서, vw 기반 max-w를
  // 쓰면 실제 기기 폭과 무관하게 항상 좁게 잡힌다(직접 페이지의 416px보다
  // 훨씬 좁아짐). forceCompact가 boolean으로 넘어오면(=iframe 컨텍스트)
  // vw 대신 고정폭 두 단계로 대체해서 직접 페이지와 폭을 통일한다.
  const tooltipWidthClass =
    forceCompact === true
      ? "w-[280px]"
      : forceCompact === false
      ? "w-[416px]"
      : "w-[416px] max-w-[calc((100vw-24px)*0.8)]";

  return (
    <span
      ref={anchorRef}
      className="relative inline-flex cursor-help"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={(e) => {
        e.preventDefault();
        open ? onLeave() : onEnter();
      }}
    >
      {iconVisual}

      {open && (
        <span
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: pos?.left ?? 0,
            top: pos?.top ?? 0,
            // placement="below"일 땐 앵커 아래로 그대로(수직 이동 없음),
            // 기본("above", pos 측정 전 초기 프레임 포함)은 기존처럼 자기
            // 높이만큼 위로 끌어올린다.
            transform: pos?.placement === "below" ? "translate(-50%, 0)" : "translate(-50%, -100%)",
          }}
        >
          {pos?.placement === "below" && (
            <span
              className="block h-0 w-0 border-x-[6px] border-b-[6px]
                         border-x-transparent border-b-black/95"
              style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
            />
          )}

          <span
            ref={tipRef}
            className={`block ${tooltipWidthClass}
                       whitespace-pre-line break-keep text-left
                       leading-snug rounded-lg bg-black/95
                       px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg`}
          >
            <div className="flex items-center gap-2 mb-2">
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={`${champId} ${skillKey}`}
                  className="w-12 h-12 rounded-md ring-1 ring-white/10"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
            </div>

            <TokenText text={tip} lang={lang} />
          </span>

          {(!pos || pos.placement === "above") && (
            <span
              className="block h-0 w-0 border-x-[6px] border-t-[6px]
                         border-x-transparent border-t-black/95"
              style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
            />
          )}
        </span>
      )}
    </span>
  );
}

/** ✅ 여기부터가 새로 “추가”되는 위치 (SkillLabelWithTip 끝난 다음 줄) */
function ToggleGroup({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-0 rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-0">
      {children}
    </div>
  );
}

// "시야" 탭 데이터가 아직 미완성이라 사이트 전체(모든 챔피언 공통)에서
// 비활성화해둔 상태. 데이터가 준비되면 이 값만 true로 뒤집으면
// 탭 클릭/스타일/"준비중" 툴팁이 전부 원래대로 복구된다(다른 곳은
// 건드릴 필요 없음 — 아래 탭 버튼 렌더링에서 이 상수 하나만 참조).
const VISION_TAB_ENABLED = false;

const toggleBtnBase = "px-2 py-1 rounded-lg text-[14px] font-bold transition";
// ChampSelectButton/UltCooldownBox와 동일한 "테두리+글로우" 강조 컨벤션
// (배경 채우기 대신 ring + shadow로만 선택 상태를 표시)
const toggleBtnOn = "ring-2 ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)] text-slate-200";
const toggleBtnOff = "text-slate-200 hover:bg-slate-800/70";
const toggleBtnDisabled = "bg-slate-800/30 text-slate-500 cursor-default";

function toggleBtnClass(active: boolean) {
  return `${toggleBtnBase} ${active ? toggleBtnOn : toggleBtnOff}`;
}
function toggleBtnFormClass(active: boolean) {
  return `${toggleBtnBase} ${active ? toggleBtnOn : toggleBtnOff}`;
}

// 아이콘이 있는 폼 탭 버튼 전용. 텍스트만 있는 toggleBtnFormClass와 선택
// 상태 스타일(ring+glow)은 동일하게 재사용하되, 안에 꽉 채우는 40x40
// 아이콘 박스에 맞춰 패딩만 줄인다(px-2 py-1 → p-1.5).
// p-0.5(2px)였을 때는 아이콘 자체의 무기색 ring-4(4px)가 패딩 밖으로
// 삐져나와 버튼의 노란 선택 ring과 같은 자리에 겹쳐져, 무기색에 가려
// 노란 테두리가 거의 안 보이는 문제가 있었다. p-1.5(6px)로 늘려 무기색
// ring(4px)과 버튼 테두리 사이에 2px 여백을 둬서 두 테두리가 겹치지
// 않고 동심원처럼 분리돼 보이게 한다.
// mr-1(마지막 버튼 뒤에도 붙지만 flex 줄 끝 여백이라 티 안 남)로 아이콘
// 버튼끼리 간격을 넓힌다 — ToggleGroup 자체의 gap-0은 텍스트 전용 폼
// 탭/스킬·시야·기믹 탭과 공유하므로 건드리지 않고, 아이콘 버튼에만 준다.
const toggleBtnIconBase = "rounded-lg transition p-1.5 mr-1";
function toggleBtnFormIconClass(active: boolean) {
  return `${toggleBtnIconBase} ${active ? toggleBtnOn : toggleBtnOff}`;
}

// P/Q/W/E/R 아이콘 위에 글자를 오버랩하는 SkillLabelWithTip의 워터마크
// 스타일(같은 40x40 박스 + 8방향 검정 text-shadow 외곽선)을 폼 탭
// 버튼(예: 아펠리오스 무기 아이콘)에도 동일하게 재사용한다. PQWER는
// 라벨이 항상 1글자라 text-xl로 채웠지만, 폼 라벨은 2~10자(칼리브럼~
// Crescendum)까지 늘어나므로 글자 크기만 text-[12px]로 줄이고 필요하면
// break-words로 두 줄까지 허용한다 — 오버레이 기법(절대위치+텍스트섀도우)
// 자체는 그대로다.
function FormTabIcon({
  icon,
  label,
  color,
}: {
  icon: string;
  label: string;
  /** 완전한 Tailwind ring 색상 클래스(예: "ring-emerald-400"). 있으면
   *  기본 ring-1 ring-white/10 대신 ring-4 + 이 색으로 아이콘 박스
   *  테두리를 강조한다(예: 아펠리오스 무기별 색). 버튼 자체의 선택
   *  상태 ring(yellow-400, toggleBtnOn)과는 다른 엘리먼트에 붙어서
   *  겹쳐 그려지므로 서로 지우지 않는다. */
  color?: string;
}) {
  const ringCls = color ? `ring-4 ${color}` : "ring-1 ring-white/10";
  return (
    <span className={`relative block w-10 h-10 rounded-lg overflow-hidden ${ringCls} bg-slate-900/50`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-center px-0.5 text-[12px] leading-[1.05] font-black break-words text-slate-100/90"
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000",
        }}
      >
        {label}
      </span>
    </span>
  );
}




export default function SkillTagsPanel({
  champId,
  lang,
  forceCompact,
}: {
  champId: string | null;
  lang: "ko" | "en";
  /** undefined면 sm: 미디어 쿼리(뷰포트 기준)로 자동 판단, true/false면 그 값으로 강제 고정 (iframe 내부처럼 뷰포트 기준을 못 믿을 때 사용) */
  forceCompact?: boolean;
}) {
  const compactRowPadding =
    forceCompact === undefined ? "py-1 sm:py-2.5" : forceCompact ? "py-1" : "py-2.5";
  const compactRowGap =
    forceCompact === undefined ? "space-y-0.5 sm:space-y-1.5" : forceCompact ? "space-y-0.5" : "space-y-1.5";

  // CHAMP_FORMS[champId] 배열의 인덱스. 탭 렌더링은 이 인덱스로 몇 개든
  // 순회한다 — 실제 데이터 조회(champ.skills 등)는 아래 form(FormDataKey)로
  // 변환해서 쓴다(위 FORM_DATA_KEYS 주석 참고).
  const [formIndex, setFormIndex] = useState(0);
  const form: FormDataKey = FORM_DATA_KEYS[formIndex] ?? "base";
  const [mode, setMode] = useState<"skill" | "vision" | "gimmick">("skill");

  useEffect(() => {
    setFormIndex(0);
    setMode("skill");
  }, [champId]);


  const champ = champId ? CHAMPS[champId as keyof typeof CHAMPS] : null;

const renderNoteSection = (items: string[], title: string) => {
  if (items.length === 0) return null;
  return (
    <div className="mt-3 rounded-xl bg-slate-800/40 ring-1 ring-white/10 p-3">
      <div className="text-base font-bold text-yellow-400 mb-2">{title}</div>
      <ul className="space-y-2 text-sm text-slate-200">
        {items.map((n, i) => (
          <li key={i} className="flex gap-2 whitespace-pre-line">
            <span className="text-slate-300">•</span>
            <span><TokenText text={n} lang={lang} /></span>
          </li>
        ))}
      </ul>
    </div>
  );
};


  // ✅ Data Dragon (스킬 설명) 준비
  const locale = lang === "ko" ? "ko_KR" : "en_US";
  const ddragonId = champId ? toDdragonId(champId) : null;
  const ddragon = useChampSpells(ddragonId, locale);
  const loadingText = locale === "ko_KR" ? "불러오는 중..." : "Loading...";

  const label: Record<SkillKey, string> = {
    P: "P",
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
  };

    /**
     * comboLabel: 흐웨이처럼 폼별로 슬롯이 가리키는 실제 서브스킬이 다른
     * 챔피언에서, 그 슬롯의 콤보 표기(예: "QE", forms.ts의 skillLabels)를
     * 넘기면 하드코딩 문장의 헤더를 DDragon 실제 스킬명 대신 그 콤보
     * 표기로 대체한다 — Q폼에서 E슬롯(QE)에 "Q - Devastating Fire"라는
     * 엉뚱한 헤더가 붙는 걸 막기 위함. 콤보 표기가 없는 슬롯(P/R처럼
     * 폼과 무관한 스킬)은 기존처럼 DDragon 실제 이름을 헤더로 쓴다.
     */
    const getSpellTip = (k: SkillKey, comboLabel?: string) => {
    if (!ddragonId) return undefined;
    if (k !== "P" && k !== "Q" && k !== "W" && k !== "E" && k !== "R") return undefined;

    // 챔피언 파일에 하드코딩된 문장이 있으면 최우선(DDragon 로딩을 기다릴
    // 필요 없이 즉시 표시). 없으면 아래 기존 DDragon 실시간 로직으로 폴백.
    // 흐웨이처럼 skillTooltip이 폼별(base/alt/alt2)로 나뉘어 있으면 현재
    // 선택된 폼 값을 먼저 찾고, 없으면(또는 애초에 폼 구조가 아니면 —
    // 아펠리오스처럼 플랫하게 쓰는 경우) 플랫 키로 폴백한다(champ.skills
    // 등 다른 필드에서 이미 쓰는 `source?.[form]?.[k] ?? source?.[k]`와
    // 동일한 패턴).
    const hardcoded = hasForms(champId ?? "")
      ? (champ?.skillTooltip as any)?.[form]?.[k]?.[lang] ?? (champ?.skillTooltip as any)?.[k]?.[lang]
      : (champ?.skillTooltip as any)?.[k]?.[lang];

    // R 문장 안의 궁극기 쿨타임을 champ.ultCooldown(레벨 6/11/16) 숫자로
    // 문자 그대로 중복 입력하지 않기 위한 {{ultCooldown}} 플레이스홀더.
    // ultCooldown 필드가 유일한 원본이고, 문장은 언제 다듬어도 숫자가
    // 어긋나지 않는다("140/120/100" 형식으로 조립해서 치환).
    const resolveSkillTooltipPlaceholders = (text: string) => {
      if (!text.includes("{{")) return text;
      const uc = champ?.ultCooldown;
      const ultCooldownStr = uc ? ([6, 11, 16] as const).map((lv) => uc[lv] ?? "?").join("/") : "";
      return text.replace(/\{\{\s*ultCooldown\s*\}\}/g, ultCooldownStr);
    };

    // P(패시브)
    if (k === "P") {
      const p = ddragon?.passive;
      if (hardcoded) {
        const header = comboLabel ?? (p ? `P - ${applyTextOverrides(p.name)}` : "P");
        return `${header}\n${resolveSkillTooltipPlaceholders(hardcoded)}`;
      }
      if (!p) return loadingText;

      const body = stripHtml(resolvePlaceholders(p.description, {}, champ?.placeholderOverrides?.P))
        .replace(/\s+\n/g, "\n")
        .replace(/[ \t]{2,}/g, " ")
        .trim();

      return `P - ${applyTextOverrides(p.name)}\n${body}`;
    }

    // Q/W/E/R
    const idx = k === "Q" ? 0 : k === "W" ? 1 : k === "E" ? 2 : 3;
    const s = ddragon?.spells?.[idx];
    if (hardcoded) {
      const header = comboLabel ?? (s ? `${k} - ${applyTextOverrides(s.name)}` : k);
      return `${header}\n${resolveSkillTooltipPlaceholders(hardcoded)}`;
    }
    if (!s) return loadingText;

    const body = stripHtml(resolvePlaceholders(s.tooltip || s.description, s, champ?.placeholderOverrides?.[k]))
      .replace(/\s+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();

    return `${k} - ${applyTextOverrides(s.name)}\n${body}`;
  };



  const renderRow = (k: SkillKey) => {
  // 선택된 폼(예: 흐웨이 화풍)에 이 슬롯 전용 아이콘이 지정돼 있으면
  // SkillLabelWithTip의 로컬 아이콘(/spells/{champId}/{k}.webp) 대신
  // 그 아이콘을 쓴다. 지정 안 됐으면 undefined → 기존과 완전히 동일.
  const skillIconOverride = champId ? CHAMP_FORMS[champId]?.[formIndex]?.skillIcons?.[k] : undefined;
  // skillIconOverride와 동일한 패턴 — 아이콘 위 오버랩 글자(예: 흐웨이
  // 화풍별 QQ/QW/QE)도 선택된 폼에 지정돼 있으면 그걸로 덮어쓴다. 툴팁
  // 헤더(comboLabel)에도 그대로 재사용한다 — getSpellTip 주석 참고.
  const skillLabelOverride = champId ? CHAMP_FORMS[champId]?.[formIndex]?.skillLabels?.[k] : undefined;

  const spellTip = getSpellTip(k, skillLabelOverride);

  const skillKeyClass = "w-10 shrink-0 flex justify-center";

  // 기믹 탭: phase 구조 확인
  if (mode === "gimmick") {
    const gimmickData: GimmickSkillData | undefined = hasForms(champId ?? "")
      ? (champ?.gimmick as any)?.[form]?.[k]
      : (champ?.gimmick as any)?.[k];

    if (gimmickData && !Array.isArray(gimmickData) && "phases" in gimmickData) {
      const phases = gimmickData.phases.filter(Boolean) as Array<{
        label: { ko: string; en: string };
        tags: (TagId | GimmickTagId)[];
      }>;

      const renderTagPill = (t: TagId | GimmickTagId, i: number) => {
        if (t === "SEPARATOR") return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
        const gLabel = GIMMICK_TAG_LABEL[t as GimmickTagId];
        const rLabel = TAG_LABEL[t as TagId];
        const labelData = gLabel ?? rLabel;
        if (!labelData) return null;
        const desc =
          GIMMICK_TAG_DESC?.[t as GimmickTagId]?.[lang] ??
          TAG_DESC?.[t as TagId]?.[lang];
        const statIcon = STAT_ICONS[t];
        return (
          <TagPill
            key={i}
            text={labelData[lang]}
            tone={toneOfTag(t)}
            tip={desc}
            icons={statIcon?.icons}
            direction={statIcon?.direction}
            size={statIcon?.size}
            lang={lang}
            tagId={t}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} lang={lang} iconOverride={skillIconOverride} labelOverride={skillLabelOverride} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-col gap-y-2">
                  {phase.tags.length > 0 ? (
                    splitIntoLineGroups(phase.tags).map((group, gi) => (
                      <div key={gi} className="flex flex-wrap items-start gap-x-1.5 gap-y-2">
                        {group.map((t, i) => renderTagPill(t, i))}
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  // 스킬 탭: phase 구조 확인
  if (mode === "skill") {
    const skillData: GimmickSkillData | undefined = hasForms(champId ?? "")
      ? (champ?.skills as any)?.[form]?.[k]
      : (champ?.skills as any)?.[k];

    if (skillData && !Array.isArray(skillData) && "phases" in skillData) {
      const phases = skillData.phases.filter(Boolean) as Array<{
        label: { ko: string; en: string };
        tags: (TagId | GimmickTagId)[];
      }>;

      const renderTagPill = (t: TagId | GimmickTagId, i: number) => {
        if (t === "SEPARATOR") return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
        const gLabel = GIMMICK_TAG_LABEL[t as GimmickTagId];
        const rLabel = TAG_LABEL[t as TagId];
        const labelData = gLabel ?? rLabel;
        if (!labelData) return null;
        const desc =
          GIMMICK_TAG_DESC?.[t as GimmickTagId]?.[lang] ??
          TAG_DESC?.[t as TagId]?.[lang];
        const statIcon = STAT_ICONS[t];
        return (
          <TagPill
            key={i}
            text={labelData[lang]}
            tone={toneOfTag(t)}
            tip={desc}
            icons={statIcon?.icons}
            direction={statIcon?.direction}
            size={statIcon?.size}
            lang={lang}
            tagId={t}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} lang={lang} iconOverride={skillIconOverride} labelOverride={skillLabelOverride} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-col gap-y-2">
                  {phase.tags.length > 0 ? (
                    splitIntoLineGroups(phase.tags).map((group, gi) => (
                      <div key={gi} className="flex flex-wrap items-start gap-x-1.5 gap-y-2">
                        {group.map((t, i) => renderTagPill(t, i))}
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  // 시야 탭: phase 구조 확인
  if (mode === "vision") {
    const visionData: GimmickSkillData | undefined = hasForms(champId ?? "")
      ? (champ?.vision as any)?.[form]?.[k]
      : (champ?.vision as any)?.[k];

    if (visionData && !Array.isArray(visionData) && "phases" in visionData) {
      const phases = visionData.phases.filter(Boolean) as Array<{
        label: { ko: string; en: string };
        tags: (TagId | GimmickTagId)[];
      }>;

      const renderTagPill = (t: TagId | GimmickTagId, i: number) => {
        if (t === "SEPARATOR") return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
        const gLabel = GIMMICK_TAG_LABEL[t as GimmickTagId];
        const rLabel = TAG_LABEL[t as TagId];
        const labelData = gLabel ?? rLabel;
        if (!labelData) return null;
        const desc =
          GIMMICK_TAG_DESC?.[t as GimmickTagId]?.[lang] ??
          TAG_DESC?.[t as TagId]?.[lang];
        const statIcon = STAT_ICONS[t];
        return (
          <TagPill
            key={i}
            text={labelData[lang]}
            tone={toneOfTag(t)}
            tip={desc}
            icons={statIcon?.icons}
            direction={statIcon?.direction}
            size={statIcon?.size}
            lang={lang}
            tagId={t}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} lang={lang} iconOverride={skillIconOverride} labelOverride={skillLabelOverride} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-col gap-y-2">
                  {phase.tags.length > 0 ? (
                    splitIntoLineGroups(phase.tags).map((group, gi) => (
                      <div key={gi} className="flex flex-wrap items-start gap-x-1.5 gap-y-2">
                        {group.map((t, i) => renderTagPill(t, i))}
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-slate-500">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  // 기본 렌더링 (skill / vision / 기믹 비phase)
  let tags: (TagId | GimmickTagId)[];

  if (mode === "gimmick") {
    const gimmickArr = hasForms(champId ?? "")
      ? (champ?.gimmick as any)?.[form]?.[k] ?? (champ?.gimmick as any)?.[k]
      : (champ?.gimmick as any)?.[k];
    tags = Array.isArray(gimmickArr) ? gimmickArr : [];
  } else {
    const source = mode === "vision" ? (champ as any)?.vision : champ?.skills;
    tags = hasForms(champId ?? "")
      ? (source?.[form]?.[k] ?? source?.[k] ?? [])
      : (source?.[k] ?? []);
  }

  const lineGroups = splitIntoLineGroups(tags);

  const renderTagPill = (t: TagId | GimmickTagId, i: number) => {
    if (t === "SEPARATOR") return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
    const gLabel = GIMMICK_TAG_LABEL[t as GimmickTagId];
    const rLabel = TAG_LABEL[t as TagId];
    const labelData = gLabel ?? rLabel;
    if (!labelData) return null;
    const statIcon = STAT_ICONS[t];
    return (
      <TagPill
        key={i}
        text={labelData[lang]}
        tone={toneOfTag(t)}
        tip={GIMMICK_TAG_DESC?.[t as GimmickTagId]?.[lang] ?? TAG_DESC?.[t as TagId]?.[lang]}
        icons={statIcon?.icons}
        direction={statIcon?.direction}
        size={statIcon?.size}
        lang={lang}
        tagId={t}
      />
    );
  };

  return (
    <div className={`grid grid-cols-[40px_1fr] gap-x-4 items-start ${compactRowPadding}`}>
      <div className={skillKeyClass}>
        <SkillLabelWithTip
          labelText={label[k]}
          tip={spellTip}
          champId={champId}
          skillKey={k}
          forceCompact={forceCompact}
          lang={lang}
          iconOverride={skillIconOverride}
          labelOverride={skillLabelOverride}
        />
      </div>

      {/* pt-2(8px): 아이콘(w-10 h-10=40px) 세로 중심(20px)에 첫 번째 줄
          그룹의 첫 줄 세로 중심을 맞추기 위한 고정 오프셋. 박스형 TagPill
          높이 H = py-[3px]*2(6px) + text-[12px]의 line-height(1.5 → 18px)
          = 24px. (40-24)/2 = 8px. flex-col 바깥 컨테이너에만 주고, 안쪽
          각 줄 그룹에는 주지 않는다(중복 적용 방지). */}
      <div className="flex flex-col gap-y-2 pt-2">
        {tags.length > 0 ? (
          lineGroups.map((group, gi) => (
            <div key={gi} className="flex flex-wrap items-start gap-x-1.5 gap-y-2">
              {group.map((t, i) => renderTagPill(t, i))}
            </div>
          ))
        ) : (
          <span className="text-sm text-slate-500">-</span>
        )}
      </div>
    </div>
  );
};



// 노트 콘텐츠 계산
let noteContent: ReactNode = null;
if (champ?.notes) {
  const n = champ.notes;
  if ('ko' in n) {
    if (mode === "skill") {
      noteContent = renderNoteSection((n as { ko: string[]; en: string[] })[lang] ?? [], lang === "ko" ? "노트" : "Notes");
    }
  } else {
    const cn = n as { skill?: { note3?: { ko: string[]; en: string[] }; note1?: { ko: string[]; en: string[] }; note2?: { ko: string[]; en: string[] } }; vision?: { ko: string[]; en: string[] }; gimmick?: { ko: string[]; en: string[] } };
    if (mode === "skill") {
      const n3 = cn.skill?.note3?.[lang] ?? [];
      const n1 = cn.skill?.note1?.[lang] ?? [];
      const n2 = cn.skill?.note2?.[lang] ?? [];
      if (n3.length > 0 || n1.length > 0 || n2.length > 0) {
        noteContent = (
          <>
            {renderNoteSection(n3, lang === "ko" ? "대충 한타 운용법" : "Rough Teamfight Guide")}
            {renderNoteSection(n1, lang === "ko" ? "스킬 요약" : "Overview")}
            {renderNoteSection(n2, lang === "ko" ? "TMI" : "TMI")}
          </>
        );
      }
    } else if (mode === "vision") {
      noteContent = renderNoteSection(cn.vision?.[lang] ?? [], lang === "ko" ? "노트" : "Notes");
    } else if (mode === "gimmick") {
      noteContent = renderNoteSection(cn.gimmick?.[lang] ?? [], lang === "ko" ? "노트" : "Notes");
    }
  }
}

// ✅ 폼 라벨/버튼 스타일 (여기만 고치면 전체 통일)
const formLabel = champId && hasForms(champId) ? CHAMP_FORMS[champId] : null;

return (
  <div className="space-y-2">
    {/* 🔹 탭 + 폼 토글 영역 */}
<div className="flex flex-col gap-2.5">
  {/* 1줄: 스킬 / 기믹 / 시야 */}
  <div className="w-fit">
  <ToggleGroup>
    <button
      type="button"
      onClick={() => setMode("skill")}
      className={toggleBtnClass(mode === "skill")}
    >
      {lang === "ko" ? "스킬" : "Skills"}
    </button>
    <button
      type="button"
      onClick={() => setMode("gimmick")}
      className={toggleBtnClass(mode === "gimmick")}
    >
      {lang === "ko" ? "기믹" : "Gimmick"}
    </button>
    <button
      type="button"
      onClick={() => {
        if (VISION_TAB_ENABLED) setMode("vision");
      }}
      className={`group relative ${
        VISION_TAB_ENABLED ? toggleBtnClass(mode === "vision") : `${toggleBtnBase} ${toggleBtnDisabled}`
      }`}
    >
      {lang === "ko" ? "시야" : "Vision"}
      {!VISION_TAB_ENABLED && (
        <span
          className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden -translate-x-1/2
                     whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-[11px] font-semibold
                     text-slate-100 ring-1 ring-white/10 shadow-lg group-hover:block"
        >
          {lang === "ko" ? "준비중" : "Coming Soon"}
        </span>
      )}
    </button>
  </ToggleGroup>
  </div>

  {/* 2줄: 폼 토글 */}
  <div className="w-fit">
  <ToggleGroup>
    {formLabel ? (
      <>
        {formLabel.map((f, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setFormIndex(i)}
            className={f.icon ? toggleBtnFormIconClass(formIndex === i) : toggleBtnFormClass(formIndex === i)}
          >
            {f.icon ? <FormTabIcon icon={f.icon} label={f[lang]} color={f.color} /> : f[lang]}
          </button>
        ))}
      </>
    ) : (
      <>
        <div className={`${toggleBtnBase} ${toggleBtnDisabled}`}>{lang === "ko" ? "기본" : "Base"}</div>
        <div className={`${toggleBtnBase} ${toggleBtnDisabled}`}>{lang === "ko" ? "변환" : "Alt"}</div>
      </>
    )}
  </ToggleGroup>
  </div>
</div>



    <div className={compactRowGap}>
      {renderRow("P")}
      {renderRow("Q")}
      {renderRow("W")}
      {renderRow("E")}
      {renderRow("R")}
    </div>

    {/* 🔹 노트 */}
    {noteContent}
    </div>
);
}
