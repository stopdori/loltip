// app/components/SkillTagsPanel.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { TAG_LABEL, TAG_DESC, type SkillKey, type TagId } from "../data/interactions";
import { GIMMICK_TAG_LABEL, GIMMICK_TAG_DESC, type GimmickTagId } from "../data/interactions/tags_gimmick";
import type { GimmickSkillData } from "../data/interactions/types";
import { CHAMPS } from "../data/champs/_index";
import { CHAMP_FORMS, hasForms, type FormKey } from "../data/interactions/forms";
import { useChampSpells } from "@/app/lib/useChampSpells";
import { stripHtml, resolvePlaceholders, applyTextOverrides, toDdragonId } from "@/app/lib/ddragon";
import { toneOfTag, TONE_CLASS, NOTE_TONE_CLASS } from "../data/interactions/tagTone";
import { STAT_ICONS } from "../data/interactions/statIcons";
import { parseTagTokens } from "../data/interactions/parseTagTokens";
import TokenText from "./TokenText";




import type { Tone } from "../data/interactions/tagTone";


function TagPill({
  text,
  tip,
  tone = "default",
  className,
  icons,
  direction,
  lang = "ko",
}: {
  text: string;
  tip?: string;
  className?: string;
  tone?: Tone;
  /** 있으면 텍스트 앞에 이 경로들의 이미지를 순서대로 렌더링한다 */
  icons?: string[];
  /** icons와 함께 쓰여, 아이콘 옆에 ↑/↓ 화살표를 추가로 표시한다 */
  direction?: "up" | "down";
  /** tip 안의 [[TAG]] 토큰을 라벨로 바꿀 때 쓸 언어 */
  lang?: "ko" | "en";
}) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  const base =
    tone === "note"
      ? "inline-flex items-center cursor-help hover:opacity-90"
      : "flex items-center justify-center rounded-md font-semibold ring-1 align-top";
  const size = tone === "note" ? "" : "px-1 py-[3px] text-[12px]";
  const toneCls = TONE_CLASS[tone] ?? TONE_CLASS.default;
  const gapCls = icons?.length ? "gap-[4px]" : "";
  const cls = `${base} ${size} ${toneCls} ${gapCls} ${className ?? ""}`;

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;
    const vw = window.innerWidth;
    const margin = 8;
    const anchorCenterX = a.left + a.width / 2;
    const left = clamp(anchorCenterX, margin + t.width / 2, vw - margin - t.width / 2);
    const top = a.top - 10;
    const arrowLeft = clamp(anchorCenterX - (left - t.width / 2), 10, t.width - 10);
    setPos({ left, top, arrowLeft });
  };

  const onEnter = () => {
    if (!tip) return;
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

  return (
    <span
      ref={anchorRef}
      className="relative inline-flex group"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={(e) => {
        if (!tip) return;
        e.preventDefault();
        open ? onLeave() : onEnter();
      }}
    >
      <span className={cls}>
        {icons?.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" className="h-[14px] w-[14px] shrink-0" />
        ))}
        {text}
        {!!icons?.length && direction && (
          <span aria-hidden="true">{direction === "up" ? "↑" : "↓"}</span>
        )}
      </span>

      {open && tip && (
        <span
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: pos?.left ?? 0,
            top: pos?.top ?? 0,
            transform: "translate(-50%, -100%)",
          }}
        >
          <span
            ref={tipRef}
            className="inline-block w-max max-w-[min(520px,calc(100vw-16px))] whitespace-pre break-keep text-center leading-snug rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {parseTagTokens(tip, lang).map((seg, i) =>
              seg.tone ? (
                <span key={i} className={NOTE_TONE_CLASS[seg.tone]}>
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </span>
          <span
            className="block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95"
            style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
          />
        </span>
      )}
    </span>
  );
}


function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function SkillLabelWithTip({
  labelText,
  tip,
  champId,
  skillKey,
  forceCompact,
}: {
  labelText: string;
  tip?: string;
  champId: string | null;
  skillKey: SkillKey;
  /** undefined면 직접 페이지(실제 vw를 신뢰 가능) → vw 기반 폭 계산.
   *  true/false면 iframe(embed) 컨텍스트 → iframe 내부 vw는 부모 페이지의
   *  실제 뷰포트를 반영 못 하므로 vw 대신 고정폭 두 단계로 대체. */
  forceCompact?: boolean;
}) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    arrowLeft: number;
  } | null>(null);

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const margin = 12;
    const anchorCenterX = a.left + a.width / 2;

    const left = clamp(
      anchorCenterX,
      margin + t.width / 2,
      vw - margin - t.width / 2
    );

    const top = a.top - 10;

    const arrowLeft = clamp(
      anchorCenterX - (left - t.width / 2),
      10,
      t.width - 10
    );

    setPos({ left, top, arrowLeft });
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
      {champId && (
        <img
          src={`/spells/${champId}/${skillKey}.webp`}
          alt={skillKey}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      )}
      <span
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-xl font-black ${watermarkTone}`}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000",
        }}
      >
        {labelText}
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
            transform: "translate(-50%, -100%)",
          }}
        >
          <span
            ref={tipRef}
            className={`block ${tooltipWidthClass}
                       whitespace-pre-line break-normal text-left
                       leading-snug rounded-lg bg-black/95
                       px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg`}
          >
            <div className="flex items-center gap-2 mb-2">
              {champId && (
                <img
                  src={`/spells/${champId}/${skillKey}.webp`}
                  alt={`${champId} ${skillKey}`}
                  className="w-12 h-12 rounded-md ring-1 ring-white/10"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
            </div>

            {tip}
          </span>

          <span
            className="block h-0 w-0 border-x-[6px] border-t-[6px]
                       border-x-transparent border-t-black/95"
            style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
          />
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

const toggleBtnBase = "px-2 py-1 rounded-lg text-[14px] font-bold transition";
// ChampSelectButton/UltCooldownBox와 동일한 "테두리+글로우" 강조 컨벤션
// (배경 채우기 대신 ring + shadow로만 선택 상태를 표시)
const toggleBtnOn = "ring-2 ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)] text-slate-200";
const toggleBtnOnForm = "ring-2 ring-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.5)] text-slate-200";
const toggleBtnOff = "text-slate-200 hover:bg-slate-800/70";
const toggleBtnDisabled = "bg-slate-800/30 text-slate-500 cursor-default";

function toggleBtnClass(active: boolean) {
  return `${toggleBtnBase} ${active ? toggleBtnOn : toggleBtnOff}`;
}
function toggleBtnFormClass(active: boolean) {
  return `${toggleBtnBase} ${active ? toggleBtnOnForm : toggleBtnOff}`;
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

  const [form, setForm] = useState<FormKey>("base");
  const [mode, setMode] = useState<"skill" | "vision" | "gimmick">("skill");

  useEffect(() => {
    setForm("base");
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

    const getSpellTip = (k: SkillKey) => {
    if (!ddragonId) return undefined;
    if (k !== "P" && k !== "Q" && k !== "W" && k !== "E" && k !== "R") return undefined;

    // P(패시브)
    if (k === "P") {
      const p = ddragon?.passive;
      if (!p) return loadingText;

      const body = stripHtml(resolvePlaceholders(p.description, {}))
        .replace(/\s+\n/g, "\n")
        .replace(/[ \t]{2,}/g, " ")
        .trim();

      return `P - ${applyTextOverrides(p.name)}\n${body}`;
    }

    // Q/W/E/R
    const idx = k === "Q" ? 0 : k === "W" ? 1 : k === "E" ? 2 : 3;
    const s = ddragon?.spells?.[idx];
    if (!s) return loadingText;

    const body = stripHtml(resolvePlaceholders(s.tooltip || s.description, s))
      .replace(/\s+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();

    return `${k} - ${applyTextOverrides(s.name)}\n${body}`;
  };



  const renderRow = (k: SkillKey) => {
  const spellTip = getSpellTip(k);

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
        if (t === "SEPARATOR_NEWLINE") return <div key={i} className="w-full h-1" />;
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
            lang={lang}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {phase.tags.length > 0 ? (
                    phase.tags.map(renderTagPill)
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
        if (t === "SEPARATOR_NEWLINE") return <div key={i} className="w-full h-1" />;
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
            lang={lang}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {phase.tags.length > 0 ? (
                    phase.tags.map(renderTagPill)
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
        if (t === "SEPARATOR_NEWLINE") return <div key={i} className="w-full h-1" />;
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
            lang={lang}
          />
        );
      };

      return (
        <div className={`flex items-start gap-x-4 ${compactRowPadding}`}>
          <div className="w-10 shrink-0">
            <SkillLabelWithTip labelText={label[k]} tip={spellTip} champId={champId} skillKey={k} forceCompact={forceCompact} />
          </div>
          <div className="flex-1 space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-slate-400">
                  {phase.label[lang]}
                </div>
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {phase.tags.length > 0 ? (
                    phase.tags.map(renderTagPill)
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

  return (
    <div className={`grid grid-cols-[40px_1fr] gap-x-4 ${tags.includes("SEPARATOR_NEWLINE") ? "items-start" : "items-center"} ${compactRowPadding} ${tags.includes("SEPARATOR_NEWLINE") ? "" : "min-h-[35px]"}`}>
      <div className={skillKeyClass}>
        <SkillLabelWithTip
          labelText={label[k]}
          tip={spellTip}
          champId={champId}
          skillKey={k}
          forceCompact={forceCompact}
        />
      </div>

      <div className={`flex flex-wrap items-start gap-x-1.5 ${tags.includes("SEPARATOR_NEWLINE") ? "gap-y-1" : "gap-y-2"}${tags.includes("SEPARATOR_NEWLINE") ? " mt-1" : ""}`}>
        {tags.length > 0 ? (
          tags.map((t, i) => {
            if (t === "SEPARATOR") return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
            if (t === "SEPARATOR_NEWLINE") return <div key={i} className="w-full h-1" />;
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
                lang={lang}
              />
            );
          })
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
            {renderNoteSection(n1, lang === "ko" ? "챔피언 요약" : "Overview")}
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
  {/* 1줄: 스킬 / 시야 / 기믹 */}
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
      onClick={() => setMode("vision")}
      className={toggleBtnClass(mode === "vision")}
    >
      {lang === "ko" ? "시야" : "Vision"}
    </button>
    <button
      type="button"
      onClick={() => setMode("gimmick")}
      className={toggleBtnClass(mode === "gimmick")}
    >
      {lang === "ko" ? "기믹" : "Gimmick"}
    </button>
  </ToggleGroup>
  </div>

  {/* 2줄: 폼 토글 */}
  <div className="w-fit">
  <ToggleGroup>
    {formLabel ? (
      <>
        <button
          type="button"
          onClick={() => setForm("base")}
          className={toggleBtnFormClass(form === "base")}
        >
          {formLabel.base[lang]}
        </button>

        <button
          type="button"
          onClick={() => setForm("alt")}
          className={toggleBtnFormClass(form === "alt")}
        >
          {formLabel.alt[lang]}
        </button>

        {formLabel.alt2 && (
          <button
            type="button"
            onClick={() => setForm("alt2")}
            className={toggleBtnFormClass(form === "alt2")}
          >
            {formLabel.alt2[lang]}
          </button>
        )}
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
