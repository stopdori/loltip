// app/components/TagPill.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { TONE_CLASS } from "../data/interactions/tagTone";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * 태그 하나를 pill(칩) 형태로 보여주고, 호버(또는 터치) 시 설명 툴팁을 띄운다.
 * TagGlossaryButton, /tags 페이지 등에서 공용으로 쓴다.
 */
export default function TagPill({
  text,
  tip,
  tone = "default",
  onClick,
  icon,
  direction,
}: {
  text: string;
  tip?: string;
  tone?: keyof typeof TONE_CLASS;
  onClick?: () => void;
  /** 있으면 텍스트 대신 이 경로의 이미지를 렌더링한다 ("/stat-icons/icon-xxx.png" 등) */
  icon?: string;
  /** icon과 함께 쓰여, 아이콘 옆에 ↑/↓ 화살표를 추가로 표시한다 */
  direction?: "up" | "down";
}) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  const base =
  "flex items-center justify-center rounded-md font-semibold ring-1 align-top px-2 py-[3px] text-[12px]";
  const toneCls = TONE_CLASS[tone] ?? TONE_CLASS.default;

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const margin = 12;

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

  return (
  <span
    ref={anchorRef}
    className="relative flex"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onTouchStart={(e) => {
      e.preventDefault();
      open ? onLeave() : onEnter();
    }}
  >
    <span
      className={`${base} ${toneCls} ${onClick ? "cursor-pointer" : ""} ${icon ? "gap-[3px]" : ""}`}
      onClick={onClick}
    >
      {icon ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt={text} className="h-[14px] w-[14px] shrink-0" />
          {direction && (
            <span aria-hidden="true">{direction === "up" ? "↑" : "↓"}</span>
          )}
        </>
      ) : (
        text
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
            className="block w-max max-w-[min(520px,calc(100vw-24px))]
                       whitespace-pre break-keep text-center leading-snug
                       rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {tip}
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
