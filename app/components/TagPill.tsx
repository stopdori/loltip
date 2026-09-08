// app/components/TagPill.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { TONE_CLASS, NOTE_TONE_CLASS, toneOfTag, type Tone } from "../data/interactions/tagTone";
import { parseTagTokens } from "../data/interactions/parseTagTokens";
import { TAG_LABEL, type TagId } from "../data/interactions/tags";
import type { GimmickTagId } from "../data/interactions/tags_gimmick";
import { CHANNEL_INTERRUPTED_BY, MOVEMENT_CHANNEL_INTERRUPTED_BY } from "../data/interactions/ccInteractions";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * 태그 하나를 표시하고, 호버(또는 터치) 시 설명 툴팁을 띄운다.
 * tone==="note"면 박스 없이 텍스트만 보여준다(문단 속 인라인 토큰용) — 이때
 * 색상은 tagId로 조회한 태그 고유 톤(NOTE_TONE_CLASS[toneOfTag(tagId)])을
 * 쓴다. 그 외 tone이면 기존처럼 배경/링이 있는 박스(pill) 형태로 그린다.
 * TagGlossaryButton, /tags 페이지, SkillTagsPanel, TokenText 등에서 공용으로 쓴다.
 */
export default function TagPill({
  text,
  tip,
  tone = "default",
  onClick,
  icons,
  direction,
  size = 17,
  lang = "ko",
  showIconInAnchor = true,
  tagId,
}: {
  text: string;
  tip?: string;
  tone?: Tone;
  onClick?: () => void;
  /** 있으면 텍스트 앞에 이 경로들의 이미지를 순서대로 작게 붙여서 함께 표시한다 ("/stat-icons/icon-xxx.png" 등) */
  icons?: string[];
  /** icons와 함께 쓰여, 아이콘 옆에 ↑/↓ 화살표를 추가로 표시한다 */
  direction?: "up" | "down";
  /** 박스형(tone!=="note") 아이콘 렌더링 크기(px). 기본 17px. note 모드에서는 폰트 크기 기준 1em을 쓰므로 이 값은 무시된다 */
  size?: number;
  /** tip 안의 [[TAG]] 토큰을 라벨로 바꿀 때 쓸 언어 */
  lang?: "ko" | "en";
  /** true(기본값)면 앵커(항상 보이는 pill/텍스트)에도 icons를 표시한다. false면 앵커엔 텍스트+화살표만 남기고, 팝업 안에만 아이콘을 표시한다 */
  showIconInAnchor?: boolean;
  /** 이 pill이 나타내는 태그의 실제 키. SKILL_CHANNEL/SKILL_CHARGED일 때 툴팁에 "방해 가능" 목록을 추가로 보여주고, note 모드일 때 텍스트 색상을 결정하는 데도 쓰인다 */
  tagId?: TagId | GimmickTagId;
}) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  // note 모드: 박스 없이 텍스트만(문단 속 인라인 토큰). 색상은 tagId 고유 톤을 따른다 —
  // tone="note" 자체는 "회색 단색"이 아니라 "박스 없음"을 뜻하는 렌더링 모드 선택자다.
  const isNote = tone === "note";
  const noteTextTone = tagId ? toneOfTag(tagId) : "default";

  // 앵커(항상 보이는 pill)에 아이콘이 실제로 뜨는지 — 박스 모드에서 아이콘이
  // 있을 때만 좌측 패딩을 줄여서(px-2 → pl-1) 아이콘 앞 여백을 좁힌다.
  // 텍스트만 있는 pill의 기존 px-2 여백감은 그대로 유지.
  const hasAnchorIcon = !!(showIconInAnchor && icons?.length);
  // note 모드는 순수 인라인 흐름으로 그린다(inline-flex 아님) — 문단 속에서
  // 주변 평문과 동일한 line-height 규칙을 따르게 하기 위함. 아이콘/화살표
  // 사이 간격도 flex gap 대신 각 요소의 margin으로 준다(아래 아이콘 mr-[1px],
  // 화살표 ml-[1px]).
  const base = isNote
    ? "cursor-help hover:opacity-90"
    : `flex items-center justify-center rounded-md font-semibold ring-1 align-top py-[3px] text-[12px] ${hasAnchorIcon ? "pl-1 pr-2" : "px-2"}`;
  const toneCls = isNote ? NOTE_TONE_CLASS[noteTextTone] : (TONE_CLASS[tone] ?? TONE_CLASS.default);
  // gap은 박스 모드(flex)에서만 의미가 있다 — note 모드는 margin 방식으로 대체.
  const gapCls = !isNote && ((showIconInAnchor && icons?.length) || direction) ? "gap-[1px]" : "";

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const margin = 8;

    const anchorCenterX = a.left + a.width / 2;

    // 화면 기준으로 툴팁 center를 clamp
    const left = clamp(anchorCenterX, margin + t.width / 2, vw - margin - t.width / 2);

    // anchor 위쪽으로 띄우기
    const top = a.top - 10;

    // 화살표 위치도 툴팁 내부에서 clamp
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
    className={`relative ${isNote ? "inline" : "flex"}`}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onTouchStart={(e) => {
      // note 모드는 기존 TokenPill/로컬 TagPill과 동일하게 tip 없으면 무시,
      // 박스 모드는 기존 TagPill.tsx와 동일하게 tip 유무와 무관하게 처리한다.
      if (isNote && !tip) return;
      e.preventDefault();
      open ? onLeave() : onEnter();
    }}
  >
    <span
      className={`${base} ${toneCls} ${onClick ? "cursor-pointer" : ""} ${gapCls}`}
      onClick={onClick}
    >
      {showIconInAnchor &&
        icons?.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className={isNote ? "inline-block align-[-0.125em] shrink-0 object-contain mr-[1px]" : "shrink-0 object-contain"}
            style={isNote ? { height: "1em", width: "1em" } : { height: size, width: size }}
          />
        ))}
      {text}
      {direction && (
        <span aria-hidden="true" className={isNote ? "ml-[1px]" : undefined}>{direction === "up" ? "↑" : "↓"}</span>
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
            className="block w-max max-w-[min(421px,calc(100vw-16px))]
                       whitespace-pre-wrap break-keep text-center leading-snug
                       rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {icons?.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" className="inline-block align-middle mr-1 object-contain" style={{ height: 16, width: 16 }} />
            ))}
            {parseTagTokens(tip, lang).map((seg, i) =>
              seg.tone ? (
                <span key={i} className={NOTE_TONE_CLASS[seg.tone]}>
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
            {(tagId === "SKILL_CHANNEL" || tagId === "SKILL_CHARGED" || tagId === "SKILL_CHANNEL_MOVEMENT") && (
              <div className="mt-1.5 whitespace-normal text-left">
                <div className="text-slate-400 text-[11px]">
                  {lang === "ko" ? "방해 가능" : "Interrupted by"}
                </div>
                <div>
                  {(tagId === "SKILL_CHANNEL_MOVEMENT" ? MOVEMENT_CHANNEL_INTERRUPTED_BY : CHANNEL_INTERRUPTED_BY).map((t, i, arr) => (
                    <span key={t} className={NOTE_TONE_CLASS[toneOfTag(t)]}>
                      {TAG_LABEL[t][lang]}
                      {i < arr.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
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
