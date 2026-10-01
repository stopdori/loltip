// app/components/TagPill.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { tipLog } from "@/app/lib/tipDebug";
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
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    arrowLeft: number;
    placement: "above" | "below";
  } | null>(null);

  // note 모드: 박스 없이 텍스트만(문단 속 인라인 토큰). 색상은 tagId 고유 톤을 따른다 —
  // tone="note" 자체는 "회색 단색"이 아니라 "박스 없음"을 뜻하는 렌더링 모드 선택자다.
  const isNote = tone === "note";
  const noteTextTone = tagId ? toneOfTag(tagId) : "default";

  // 앵커(항상 보이는 pill)에 아이콘이 실제로 뜨는지 — 박스 모드에서 아이콘이
  // 있을 때만 좌측 패딩을 줄여서(px-1 → pl-0.5) 아이콘 앞 여백을 좁힌다.
  // 텍스트만 있는 pill의 기존 px-1 여백감은 그대로 유지.
  const hasAnchorIcon = !!(showIconInAnchor && icons?.length);
  // note 모드는 순수 인라인 흐름으로 그린다(inline-flex 아님) — 문단 속에서
  // 주변 평문과 동일한 line-height 규칙을 따르게 하기 위함. 아이콘/화살표
  // 사이 간격도 flex gap 대신 각 요소의 margin으로 준다(아래 아이콘 mr-[1px],
  // 화살표 ml-[1px]).
  // min-w-[42px]: "Q플"/"W플"/"E플"/"R플"처럼 "라틴 알파벳 1글자 + 한글
  // 1글자" 형태의 짧은 라벨은 앞 글자가 W냐 Q/E/R이냐에 따라 실제 렌더링
  // 폭이 달라 보인다(W가 라틴 알파벳 중 가장 넓은 글자라 20~40% 더 넓게
  // 그려짐 — 한글 음절 자체는 폭이 고정이라 차이는 순전히 앞 글자 탓).
  // 42px는 이 중 가장 넓은 "W플"(px-2 포함 약 39px 추정)을 여유 있게
  // 덮는 값으로, 그보다 짧은 라벨(Q플/E플/R플 등)만 끌어올리고 긴
  // 라벨(예: "이동금지")은 이미 min을 넘어서 있어 영향이 없다. note
  // 모드는 대상이 아니므로 박스 모드에서만 적용.
  const base = isNote
    ? "hover:opacity-90"
    : `flex items-center justify-center rounded-md font-semibold ring-1 align-top py-[3px] text-[12px] min-w-[42px] ${hasAnchorIcon ? "pl-0.5 pr-1" : "px-1"}`;
  const toneCls = isNote ? NOTE_TONE_CLASS[noteTextTone] : (TONE_CLASS[tone] ?? TONE_CLASS.default);
  // gap은 박스 모드(flex)에서만 의미가 있다 — note 모드는 margin 방식으로 대체.
  const gapCls = !isNote && ((showIconInAnchor && icons?.length) || direction) ? "gap-[1px]" : "";

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const margin = 8;

    const anchorCenterX = a.left + a.width / 2;

    // 화면 기준으로 툴팁 center를 clamp (가장자리에서만 안쪽으로 보정)
    const left = clamp(anchorCenterX, margin + t.width / 2, vw - margin - t.width / 2);

    // 기본은 알약 바로 위. 위쪽이 화면 가장자리에 닿아 잘릴 때만 아래로 뒤집는다.
    const fitsAbove = a.top - 10 - t.height >= margin;
    const fitsBelow = a.bottom + 10 + t.height <= vh - margin;
    const placement: "above" | "below" = fitsAbove || !fitsBelow ? "above" : "below";
    const top = placement === "above" ? a.top - 10 : a.bottom + 10;

    // 화살표 위치도 툴팁 내부에서 clamp
    const arrowLeft = clamp(anchorCenterX - (left - t.width / 2), 10, t.width - 10);

    setPos({ left, top, arrowLeft, placement });
  };

  // 진단 로그(?tipdebug=1)용 라벨.
  const dbg = `TAG ${tagId ?? text}`;

  const onEnter = (reason: string) => {
    if (!tip) return;
    tipLog(`${dbg} open=true (${reason})`);
    setOpen(true);
    requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });
  };

  const onLeave = (reason: string) => {
    if (open) tipLog(`${dbg} open=false (${reason})`);
    setOpen(false);
    setPos(null);
  };

  // 바깥 판정은 pointerdown(capture) 하나로(마우스/터치 공통). 툴팁 박스는
  // createPortal로 document.body에 그려져 anchorRef의 DOM 자손이 아니므로
  // tipRef 쪽도 함께 확인한다. 기준은 "자기 알약/자기 말풍선 안쪽이면 바깥 아님"
  // — 스킬 말풍선 안의 다른 곳을 탭하면 태그 말풍선만 닫혀야 하므로 스킬 층
  // 전체를 안쪽으로 보지 않는다. 진단 오버레이(debug 층) 조작은 예외로 무시.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Node)) return;
      if (anchorRef.current?.contains(target) || tipRef.current?.contains(target)) return;
      if (target instanceof Element && target.closest('[data-tooltip-layer="debug"]')) return;
      onLeave("outside-pointerdown");
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open]);

  // 클릭 직전 pointerdown의 종류. click 이벤트의 pointerType은 브라우저마다
  // 지원이 달라서(구형 Safari는 MouseEvent) pointerdown에서 기록해 둔다.
  const lastPointerTypeRef = useRef<string>("");

  // 열림 토글은 click 하나로만(탭/클릭 모두 한 번씩만 옴 → 이중 토글 없음).
  // 단 실제 마우스는 호버로 이미 열려 있으므로, 클릭이 그걸 닫아버리지 않게
  // "열기"로만 동작한다.
  const handleClick = (e: React.MouseEvent) => {
    if (!tip) return;
    // portal로 그린 자기 말풍선 안쪽 클릭은 React 트리를 타고 여기까지 버블된다.
    if (e.target instanceof Element && e.target.closest('[data-tooltip-layer="tag"]')) {
      tipLog(`${dbg} click ignored (inside own tooltip)`);
      return;
    }
    if (lastPointerTypeRef.current === "mouse") {
      if (!open) onEnter("click-open-mouse");
      return;
    }
    if (open) onLeave("click-toggle");
    else onEnter("click-toggle");
  };

  // Esc로 닫기. 스킬 말풍선 안에 중첩된 경우, 스킬 말풍선 쪽 Esc 핸들러가
  // (SkillTagsPanel.tsx) data-tooltip-layer="tag"가 열려 있는 동안은 자기
  // 자신을 닫지 않고 양보하므로, 이 리스너가 먼저 소비해서 "Esc 한 번 =
  // 태그 말풍선만 닫힘"이 된다.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onLeave("esc");
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // 열려 있는 동안 스크롤/리사이즈 시 알약 위치를 따라간다. 고정된 스킬
  // 말풍선 안의 알약은 스킬 말풍선과 함께 움직이므로, 따라가지 않으면 태그
  // 말풍선만 제자리에 남아 알약과 떨어져 보인다.
  useEffect(() => {
    if (!open) return;
    let rafId: number | null = null;
    const schedule = () => {
      if (rafId != null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        measure();
      });
    };
    window.addEventListener("scroll", schedule, { capture: true, passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule, { capture: true });
      window.removeEventListener("resize", schedule);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // 툴팁이 열린 채로 스크롤해서 앵커가 화면 밖으로 완전히 벗어나면
  // 자동으로 닫는다. open일 때만 observe하고, 닫히면 disconnect.
  useEffect(() => {
    if (!open) return;
    const el = anchorRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) onLeave("intersection");
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [open]);

  return (
  <span
    ref={anchorRef}
    // cursor-pointer: iOS Safari가 탭을 click으로 위임하도록 보장(tip이 있을 때만).
    className={`relative ${isNote ? "inline" : "flex"} ${tip ? "cursor-pointer" : ""}`}
    // 호버는 실제 마우스일 때만 — 모바일 합성 mouseenter로 인한 유령 호버 차단.
    onPointerEnter={(e) => {
      if (e.pointerType !== "mouse") return;
      onEnter("pointerenter-mouse");
    }}
    onPointerLeave={(e) => {
      if (e.pointerType !== "mouse") return;
      onLeave("pointerleave-mouse");
    }}
    onPointerDown={(e) => {
      lastPointerTypeRef.current = e.pointerType;
    }}
    onClick={handleClick}
  >
    <span
      className={`${base} ${toneCls} ${onClick || tip ? "cursor-pointer" : ""} ${gapCls}`}
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

      {open && tip && typeof document !== "undefined" && createPortal(
        <span
          data-tooltip-layer="tag"
          // pointer-events-auto: 말풍선 위 탭이 아래 요소로 통과하지 않고 "태그
          // 레이어 안쪽"으로 판정되게 한다(모바일 중첩 닫힘 규칙의 전제). 알약과
          // 10px 떨어져 있어 호버 시엔 알약을 벗어나는 순간 닫히므로 걸리지 않는다.
          className="pointer-events-auto fixed z-[10000]"
          style={{
            left: pos?.left ?? 0,
            top: pos?.top ?? 0,
            transform: pos?.placement === "below" ? "translate(-50%, 0)" : "translate(-50%, -100%)",
          }}
        >
          {pos?.placement === "below" && (
            <span
              className="block h-0 w-0 border-x-[6px] border-b-[6px] border-x-transparent border-b-black/95"
              style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
            />
          )}
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

          {pos?.placement !== "below" && (
            <span
              className="block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95"
              style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
            />
          )}
        </span>,
        document.body
      )}
    </span>
  );
}
