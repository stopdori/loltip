// app/[locale]/tags/TagsClient.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import SiteHeader from "@/app/components/SiteHeader";
import TagPill from "@/app/components/TagPill";
import { TAG_LABEL, TAG_DESC, type TagId } from "@/app/data/interactions";
import { GIMMICK_TAG_LABEL, GIMMICK_TAG_DESC, type GimmickTagId } from "@/app/data/interactions/tags_gimmick";
import { TAG_CATEGORIES, VISION_STEALTH_CATEGORY, GIMMICK_CATEGORIES } from "@/app/data/interactions/tagCategories";
import { toneOfTag, NOTE_TONE_CLASS, type Tone } from "@/app/data/interactions/tagTone";
import { STAT_ICONS } from "@/app/data/interactions/statIcons";
import { parseTagTokens } from "@/app/data/interactions/parseTagTokens";
import { CC_INTERACTIONS, CHANNEL_INTERRUPTED_BY, MOVEMENT_CHANNEL_INTERRUPTED_BY, type Removal } from "@/app/data/interactions/ccInteractions";

type Lang = "ko" | "en";
type Tab = "basic" | "vision" | "gimmick";

// ---------------------------------------------------------------------------
// 개발 모드 전용: tagCategories.ts에 정의된 키 집합과 실제 TAG_LABEL /
// GIMMICK_TAG_LABEL의 키 집합이 어긋나면 콘솔에 경고를 띄운다.
// 프로덕션 빌드에는 영향 없음 (다음 조건 자체가 트리쇼킹되어 사라짐).
// ---------------------------------------------------------------------------
// 태그 자체는 실존하지만(SEPARATOR류) 의도적으로 카테고리 화면에는
// 노출하지 않는 태그. 정합성 체크의 "누락" 경고 대상에서 제외한다.
const EXCLUDED_FROM_DISPLAY: Set<string> = new Set(["SEPARATOR", "SEPARATOR_NEWLINE"]);

if (process.env.NODE_ENV === "development") {
  // "기본 태그" 탭(TAG_CATEGORIES)만으로는 POSITION_*/HIT_* 9개가 빠지는데,
  // 이 태그들은 "시야·은신" 탭(VISION_STEALTH_CATEGORY)에만 있는 게 의도된
  // 설계다. 따라서 두 목록의 합집합을 실제 커버리지로 보고 비교한다.
  const categorizedTagKeys = new Set<string>([
    ...TAG_CATEGORIES.flatMap((c) => c.keys),
    ...VISION_STEALTH_CATEGORY.keys,
  ]);
  const actualTagKeys = new Set<string>(Object.keys(TAG_LABEL));
  const missingFromCategories = [...actualTagKeys].filter((k) => !categorizedTagKeys.has(k));
  const staleInCategories = [...categorizedTagKeys].filter((k) => !actualTagKeys.has(k));

  if (missingFromCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] TAG_LABEL에는 있지만 TAG_CATEGORIES+VISION_STEALTH_CATEGORY에는 없는 태그(추가 필요):",
      missingFromCategories
    );
  }
  if (staleInCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] TAG_CATEGORIES+VISION_STEALTH_CATEGORY에는 있지만 TAG_LABEL에는 없는 태그(삭제된 태그, 정리 필요):",
      staleInCategories
    );
  }

  const categorizedGimmickKeys = new Set<string>(GIMMICK_CATEGORIES.flatMap((c) => c.keys));
  const actualGimmickKeys = new Set<string>(Object.keys(GIMMICK_TAG_LABEL));
  const missingFromGimmickCategories = [...actualGimmickKeys].filter(
    (k) => !categorizedGimmickKeys.has(k) && !EXCLUDED_FROM_DISPLAY.has(k)
  );
  const staleInGimmickCategories = [...categorizedGimmickKeys].filter((k) => !actualGimmickKeys.has(k));

  if (missingFromGimmickCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] GIMMICK_TAG_LABEL에는 있지만 GIMMICK_CATEGORIES에는 없는 태그(추가 필요):",
      missingFromGimmickCategories
    );
  }
  if (staleInGimmickCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] GIMMICK_CATEGORIES에는 있지만 GIMMICK_TAG_LABEL에는 없는 태그(삭제된 태그, 정리 필요):",
      staleInGimmickCategories
    );
  }

  // subGroups를 쓰는 카테고리는 "subGroups 키 합집합 === keys 최상위 배열"이어야
  // 한다(순서 무관, 집합 일치). SEPARATOR/SEPARATOR_NEWLINE은 줄 안 구분선 표시용으로만
  // subGroups에 등장할 수 있으므로, 합집합 계산 시 미리 제외하고 비교한다.
  const checkSubGroupsUnion = (
    sourceLabel: string,
    categories: { title: { ko: string }; keys: string[]; subGroups?: { keys: string[] }[] }[]
  ) => {
    for (const cat of categories) {
      if (!cat.subGroups) continue;
      const union = new Set(
        cat.subGroups.flatMap((g) => g.keys).filter((k) => !EXCLUDED_FROM_DISPLAY.has(k))
      );
      const keysSet = new Set(cat.keys);
      const missing = cat.keys.filter((k) => !union.has(k));
      const extra = [...union].filter((k) => !keysSet.has(k));
      if (missing.length > 0 || extra.length > 0) {
        console.warn(
          `[tagCategories.ts] ${sourceLabel} "${cat.title.ko}"의 subGroups 합집합이 keys와 불일치합니다:`,
          { missing, extra }
        );
      }
    }
  };
  checkSubGroupsUnion("TAG_CATEGORIES", TAG_CATEGORIES);
  checkSubGroupsUnion("GIMMICK_CATEGORIES", GIMMICK_CATEGORIES);
}

// ---------------------------------------------------------------------------

const TAB_LABEL: Record<Tab, { ko: string; en: string }> = {
  basic: { ko: "기본 태그", en: "Basic Tags" },
  vision: { ko: "시야 · 은신", en: "Vision · Stealth" },
  gimmick: { ko: "기믹", en: "Gimmick" },
};

type SearchHit = {
  key: string;
  kind: "tag" | "gimmick";
  label: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * renderTagDetailCard의 설명 텍스트 안에 등장하는 [[TAG]] 토큰 전용.
 * TagPill.tsx의 호버 위치 계산(getBoundingClientRect → fixed 포지션 말풍선)
 * 로직을 그대로 재사용하되, 앵커는 배경/테두리 없는 순수 색깔 텍스트이고
 * 클릭 핸들러가 전혀 없다 — 이 카드 안에서만 쓰는 로컬 컴포넌트.
 */
function InlineTagToken({
  text,
  tone,
  tagId,
  lang,
}: {
  text: string;
  tone: Tone;
  tagId: TagId | GimmickTagId;
  lang: "ko" | "en";
}) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  const desc =
    (GIMMICK_TAG_DESC as Partial<Record<string, { ko: string; en: string }>>)[tagId] ??
    (TAG_DESC as Partial<Record<string, { ko: string; en: string }>>)[tagId];
  const tip = desc?.[lang];
  const statIcon = STAT_ICONS[tagId];

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;
    const vw = window.innerWidth;
    const margin = 12;
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

  return (
    <span
      ref={anchorRef}
      className="relative inline"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={(e) => {
        if (!tip) return;
        e.preventDefault();
        open ? onLeave() : onEnter();
      }}
    >
      <span className={`cursor-help ${NOTE_TONE_CLASS[tone]}`}>{text}</span>

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
            className="block w-max max-w-[min(520px,calc(100vw-24px))]
                       whitespace-pre-wrap break-keep text-center leading-snug
                       rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {statIcon?.icons?.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" className="inline-block align-middle mr-1 object-contain" style={{ height: 16, width: 16 }} />
            ))}
            {/* 설명 안에 또 다른 [[TAG]]가 있어도, 여기서는 정적 색깔
                텍스트로만 표시한다(호버/클릭 없음 — 무한 중첩 방지). */}
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

export default function TagsClient() {
  const locale = useLocale();
  const lang = locale as Lang;

  const [tab, setTab] = useState<Tab>("basic");
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<SearchHit | null>(null);

  const title = lang === "ko" ? "태그 레퍼런스" : "Tag Reference";
  const subtitle = lang === "ko" ? "모든 상호작용 태그 사전" : "Full interaction tag glossary";

  // 검색 인덱스: TAG_LABEL + GIMMICK_TAG_LABEL 전체를 라벨 텍스트 기준으로 통합
  const searchIndex = useMemo<SearchHit[]>(() => {
    const tagHits: SearchHit[] = Object.entries(TAG_LABEL).map(([key, v]) => ({
      key,
      kind: "tag",
      label: `${v.ko} ${v.en}`,
    }));
    const gimmickHits: SearchHit[] = Object.entries(GIMMICK_TAG_LABEL).map(([key, v]) => ({
      key,
      kind: "gimmick",
      label: `${v.ko} ${v.en}`,
    }));
    return [...tagHits, ...gimmickHits];
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((hit) => hit.label.toLowerCase().includes(q)).slice(0, 30);
  }, [query, searchIndex]);

  // 드롭다운에서 태그를 고르면 탐색(탭 전환/스크롤) 없이 검색창 바로 아래
  // 상세 카드 하나만 띄운다 — 순수 조회(lookup)로 끝나는 흐름.
  const selectTag = (hit: SearchHit) => {
    setSelectedTag(hit);
    setQuery("");
  };

  // 태그 키 배열 하나를 pill 한 줄로 렌더링 (renderCategoryCard의 기본 나열,
  // subGroups가 있을 때는 줄마다 이걸 반복 호출).
  const renderTagRow = (keys: string[], kind: "tag" | "gimmick") => {
    const labelMap = kind === "tag" ? TAG_LABEL : GIMMICK_TAG_LABEL;
    const descMap = kind === "tag" ? TAG_DESC : GIMMICK_TAG_DESC;

    return (
      <div className="flex flex-wrap gap-2">
        {keys.map((key, i) => {
          // SEPARATOR/SEPARATOR_NEWLINE은 SkillTagsPanel.tsx의 renderTagPill과
          // 동일하게, pill(TagPill)로 감싸지 않고 배경/테두리 없는 평문
          // 텍스트로만 그린다 (GIMMICK_TAG_LABEL 조회 자체를 하지 않음).
          if (key === "SEPARATOR") {
            return <span key={i} className="text-slate-400 text-xl px-1 self-end leading-none">/</span>;
          }
          if (key === "SEPARATOR_NEWLINE") {
            return <div key={i} className="w-full h-1" />;
          }

          const label = (labelMap as Record<string, { ko: string; en: string }>)[key];
          if (!label) return null;
          const desc = (descMap as Partial<Record<string, { ko: string; en: string }>>)[key];
          const domId = `tag-${kind}-${key}`;
          const statIcon = STAT_ICONS[key as TagId | GimmickTagId];
          return (
            <div key={key} id={domId}>
              <TagPill
                text={label[lang]}
                tip={desc?.[lang]}
                tone={toneOfTag(key as TagId | GimmickTagId)}
                onClick={() => selectTag({ kind, key, label: `${label.ko} ${label.en}` })}
                icons={statIcon?.icons}
                direction={statIcon?.direction}
                size={statIcon?.size}
                lang={lang}
                tagId={key as TagId | GimmickTagId}
              />
            </div>
          );
        })}
      </div>
    );
  };

  // 카테고리 하나를 카드로 렌더링 (제목 + 그 카테고리에 속한 태그 pill 전부,
  // 생략 없이 전체 나열). subGroups가 있으면 줄 단위로 나눠서 그린다.
  const renderCategoryCard = (
    cat: {
      title: { ko: string; en: string };
      keys: string[];
      subGroups?: { title?: { ko: string; en: string }; keys: string[] }[];
    },
    kind: "tag" | "gimmick"
  ) => {
    return (
      <section
        key={cat.title.ko}
        className="rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-4"
      >
        <h2 className="text-lg font-bold text-yellow-400 mb-3">{cat.title[lang]}</h2>
        {cat.subGroups ? (
          <div className="space-y-2">
            {cat.subGroups.map((row, i) => (
              <div key={i}>
                {row.title ? (
                  <h3 className="text-xs text-slate-400 mb-1">{row.title[lang]}</h3>
                ) : null}
                {renderTagRow(row.keys, kind)}
              </div>
            ))}
          </div>
        ) : (
          renderTagRow(cat.keys, kind)
        )}
      </section>
    );
  };

  // CC_INTERACTIONS 라벨+값 한 줄 (라벨: text-slate-400 text-xs, 값: 조건별 색상).
  const renderCCInteractionRow = (label: string, value: React.ReactNode) => (
    <div className="flex items-center justify-between gap-3">
      <span className="text-slate-400 text-xs">{label}</span>
      <span className="text-xs font-semibold">{value}</span>
    </div>
  );

  // 해당 태그가 CC_INTERACTIONS에 데이터를 갖고 있을 때만 상세 카드 설명
  // 아래에 표시하는 보조 상호작용 섹션(채널링/대시 차단, 강인함, 해제 수단 등).
  // 데이터가 없으면 null을 반환해 섹션 자체를 렌더링하지 않는다.
  const renderCCInteractionSection = (key: TagId) => {
    const info = CC_INTERACTIONS[key];
    if (!info) return null;

    const YES = lang === "ko" ? "가능" : "Yes";
    const NO = lang === "ko" ? "불가능" : "No";
    const BLOCKED = lang === "ko" ? "차단됨" : "Blocked";
    const NO_EFFECT = lang === "ko" ? "영향없음" : "No effect";
    const APPLIES = lang === "ko" ? "적용" : "Applies";
    const NOT_APPLIED = lang === "ko" ? "미적용" : "Doesn't apply";
    const NA = lang === "ko" ? "해당없음" : "N/A";

    const boolCls = (v: boolean) => (v ? "text-emerald-400" : "text-slate-400");

    const removalText: Record<Removal, string> = {
      CLEANSE_FAMILY: lang === "ko" ? "클린즈 계열" : "Cleanse-family",
      QSS_ONLY: lang === "ko" ? "QSS만 가능" : "QSS only",
      NONE: lang === "ko" ? "해제 불가능" : "Cannot be removed",
      NOT_APPLICABLE: NA,
    };
    const removalCls: Record<Removal, string> = {
      CLEANSE_FAMILY: "text-emerald-400",
      QSS_ONLY: "text-amber-400",
      NONE: "text-rose-400",
      NOT_APPLICABLE: "text-slate-400",
    };

    return (
      <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:border-white/10 md:pl-4 md:w-56 md:flex-shrink-0">
        {renderCCInteractionRow(
          lang === "ko" ? "채널링 차단" : "Interrupts Channel",
          <span className={boolCls(info.interruptsChannel)}>{info.interruptsChannel ? YES : NO}</span>
        )}
        {renderCCInteractionRow(
          lang === "ko" ? "대시 차단" : "Interrupts Dash",
          <span className={boolCls(info.interruptsDash)}>{info.interruptsDash ? YES : NO}</span>
        )}
        {renderCCInteractionRow(
          lang === "ko" ? "이동 소환사 주문 차단" : "Blocks Movement Spells",
          <span className={boolCls(info.blocksMovementSpells)}>{info.blocksMovementSpells ? BLOCKED : NO_EFFECT}</span>
        )}
        {renderCCInteractionRow(
          lang === "ko" ? "소환사 주문 전체 차단" : "Blocks All Spells",
          <span className={boolCls(info.blocksAllSpells)}>{info.blocksAllSpells ? BLOCKED : NO_EFFECT}</span>
        )}
        {renderCCInteractionRow(
          lang === "ko" ? "강인함 적용" : "Tenacity",
          <span className={info.tenacity === "NOT_APPLICABLE" ? "text-slate-400" : boolCls(info.tenacity)}>
            {info.tenacity === "NOT_APPLICABLE" ? NA : info.tenacity ? APPLIES : NOT_APPLIED}
          </span>
        )}
        {renderCCInteractionRow(
          lang === "ko" ? "해제 수단" : "Removal",
          <span className={removalCls[info.removal]}>{removalText[info.removal]}</span>
        )}
        {info.endsIfCasterDies !== undefined &&
          renderCCInteractionRow(
            lang === "ko" ? "시전자 사망 시 조기 해제" : "Ends if Caster Dies",
            <span className={boolCls(info.endsIfCasterDies)}>
              {info.endsIfCasterDies ? (lang === "ko" ? "예" : "Yes") : (lang === "ko" ? "아니오" : "No")}
            </span>
          )}
        {info.note && <p className="text-[11px] text-slate-500 pt-1">{info.note[lang]}</p>}
      </div>
    );
  };

  // SKILL_CHANNEL/SKILL_CHARGED/SKILL_CHANNEL_MOVEMENT를 선택했을 때만
  // 표시하는 보조 섹션. 이 태그들은 CC_INTERACTIONS에 없어
  // (renderCCInteractionSection이 null을 반환) 사이드 패널이 비어 있었는데,
  // TagPill.tsx 호버 툴팁과 동일하게 "그 태그를 끊을 수 있는 CC 목록"을
  // 여기서도 보여준다. SKILL_CHANNEL_MOVEMENT만 별도로 MOVEMENT_CHANNEL_
  // INTERRUPTED_BY(일반 채널 차단 CC 전체 + ROOT/GROUNDED)를 쓴다.
  // 목록이 최대 17개로 많아서 renderCCInteractionRow처럼 줄 단위로 나열하면
  // 세로로 너무 길어지므로, TagPill.tsx 툴팁과 동일하게 쉼표 구분 + 자연
  // 줄바꿈 문단으로 그린다.
  const renderChannelInterruptSection = () => {
    if (!selectedTag) return null;
    if (
      selectedTag.key !== "SKILL_CHANNEL" &&
      selectedTag.key !== "SKILL_CHARGED" &&
      selectedTag.key !== "SKILL_CHANNEL_MOVEMENT"
    ) return null;

    const list =
      selectedTag.key === "SKILL_CHANNEL_MOVEMENT" ? MOVEMENT_CHANNEL_INTERRUPTED_BY : CHANNEL_INTERRUPTED_BY;

    return (
      <div className="mt-3 pt-3 border-t border-white/10 space-y-1.5 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:border-white/10 md:pl-4 md:w-56 md:flex-shrink-0">
        <div className="text-slate-400 text-xs">
          {lang === "ko" ? "방해 가능" : "Interrupted by"}
        </div>
        <p className="text-xs font-semibold leading-relaxed">
          {list.map((tag, i) => (
            <span key={tag}>
              <InlineTagToken text={TAG_LABEL[tag][lang]} tone={toneOfTag(tag)} tagId={tag} lang={lang} />
              {i < list.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    );
  };

  // 검색에서 고른 태그 하나만을 위한 상세 카드. 탐색(탭 전환/스크롤) 없이
  // 검색창 바로 아래에서 조회만 끝내는 용도.
  const renderTagDetailCard = () => {
    if (!selectedTag) return null;
    const labelMap = selectedTag.kind === "tag" ? TAG_LABEL : GIMMICK_TAG_LABEL;
    const descMap = selectedTag.kind === "tag" ? TAG_DESC : GIMMICK_TAG_DESC;
    const label = (labelMap as Record<string, { ko: string; en: string }>)[selectedTag.key];
    if (!label) return null;
    const desc = (descMap as Partial<Record<string, { ko: string; en: string }>>)[selectedTag.key];
    const descText = desc?.[lang];
    const statIcon = STAT_ICONS[selectedTag.key as TagId | GimmickTagId];

    return (
      <div className="relative max-w-md md:max-w-2xl mx-auto rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-4">
        <button
          type="button"
          onClick={() => setSelectedTag(null)}
          aria-label={lang === "ko" ? "닫기" : "Close"}
          className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center rounded-full bg-slate-900 ring-1 ring-white/10 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="md:flex-1 md:min-w-0">
            <div className="mb-3">
              <TagPill
                text={label[lang]}
                tone={toneOfTag(selectedTag.key as TagId | GimmickTagId)}
                icons={statIcon?.icons}
                direction={statIcon?.direction}
                size={statIcon?.size}
                tagId={selectedTag.key as TagId | GimmickTagId}
              />
            </div>
            {descText ? (
              <p className="whitespace-pre-line text-sm text-slate-200 leading-relaxed">
                {parseTagTokens(descText, lang).map((seg, i) =>
                  seg.tone && seg.tagId ? (
                    <InlineTagToken key={i} text={seg.text} tone={seg.tone} tagId={seg.tagId} lang={lang} />
                  ) : seg.tone ? (
                    <span key={i} className={NOTE_TONE_CLASS[seg.tone]}>
                      {seg.text}
                    </span>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </p>
            ) : (
              <p className="text-sm text-slate-500">{lang === "ko" ? "설명 없음" : "No description"}</p>
            )}
          </div>
          {selectedTag.kind === "tag" && renderCCInteractionSection(selectedTag.key as TagId)}
          {selectedTag.kind === "gimmick" && renderChannelInterruptSection()}
        </div>
      </div>
    );
  };

  // 카테고리 카드들을 반응형 그리드(모바일 1열 / sm 이상 2열)로 배치.
  // 카테고리가 하나뿐인 탭(시야·은신)은 그리드 없이 카드 하나만 보여준다.
  const renderCategoryList = (
    categories: {
      title: { ko: string; en: string };
      keys: string[];
      subGroups?: { title?: { ko: string; en: string }; keys: string[] }[];
    }[],
    kind: "tag" | "gimmick"
  ) => {
    if (categories.length <= 1) {
      return <div className="space-y-4">{categories.map((cat) => renderCategoryCard(cat, kind))}</div>;
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {categories.map((cat) => renderCategoryCard(cat, kind))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <SiteHeader subtitle={subtitle} />

      <div className="mx-auto w-full max-w-[960px] px-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100">{title}</h1>
        </div>

        {/* 검색 */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "ko" ? "태그 검색... (예: 기절, Stun)" : "Search tags... (e.g. Stun)"}
            className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-yellow-400/60"
          />

          {query.trim() && (
            <div className="absolute left-0 right-0 top-full mt-1 z-40 max-h-[320px] overflow-y-auto rounded-xl bg-slate-900 ring-1 ring-white/10 shadow-xl">
              {searchResults.length === 0 ? (
                <div className="px-4 py-3 text-sm text-slate-400">
                  {lang === "ko" ? "검색 결과 없음" : "No results found"}
                </div>
              ) : (
                searchResults.map((hit) => {
                  const labelMap = hit.kind === "tag" ? TAG_LABEL : GIMMICK_TAG_LABEL;
                  const label = (labelMap as Record<string, { ko: string; en: string }>)[hit.key];
                  return (
                    <button
                      key={`${hit.kind}-${hit.key}`}
                      type="button"
                      onClick={() => selectTag(hit)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/80 flex items-center justify-between gap-2"
                    >
                      <span>{label?.[lang]}</span>
                      <span className="text-xs text-slate-500">
                        {hit.kind === "gimmick" ? (lang === "ko" ? "기믹" : "Gimmick") : (lang === "ko" ? "기본" : "Basic")}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* 검색에서 고른 태그 상세 카드 */}
        {renderTagDetailCard()}

        {/* 탭 */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-0 rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-1">
            {(Object.keys(TAB_LABEL) as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition ${
                  tab === t
                    ? "ring-2 ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)] text-slate-200"
                    : "text-slate-200 hover:bg-slate-800/70"
                }`}
              >
                {TAB_LABEL[t][lang]}
              </button>
            ))}
          </div>
        </div>

        {/* 본문 */}
        <div>
          {tab === "basic" && renderCategoryList(TAG_CATEGORIES, "tag")}
          {tab === "vision" && renderCategoryList([VISION_STEALTH_CATEGORY], "tag")}
          {tab === "gimmick" && renderCategoryList(GIMMICK_CATEGORIES, "gimmick")}
        </div>
      </div>
    </div>
  );
}
