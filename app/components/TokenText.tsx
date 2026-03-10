// app/components/TokenText.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { TAG_LABEL, TAG_DESC, type TagId } from "../data/interactions";
import { toneOfTag, NOTE_TONE_CLASS } from "../data/interactions/tagTone";
import type { Tone } from "../data/interactions/tagTone";

function TokenPill({
  label,
  tip,
  tone,
}: {
  label: string;
  tip?: string;
  tone: Tone;
}) {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const adjustPosition = () => {
    requestAnimationFrame(() => {
      const el = tooltipRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const MARGIN = 8;
      const vw = window.innerWidth;
      let s = 0;
      if (rect.left < MARGIN) s = MARGIN - rect.left;
      else if (rect.right > vw - MARGIN) s = vw - MARGIN - rect.right;
      setShift(s);
    });
  };

  useEffect(() => {
    if (!open) return;
    adjustPosition();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const close = (e: TouchEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("touchstart", close);
    return () => document.removeEventListener("touchstart", close);
  }, [open]);

  return (
    <span
      ref={ref}
      className="relative inline-flex group align-baseline"
      onTouchStart={(e) => {
        if (!tip) return;
        e.preventDefault();
        setOpen((prev) => !prev);
      }}
      onMouseEnter={adjustPosition}
    >
      <span className={`inline cursor-help hover:opacity-90 ${NOTE_TONE_CLASS[tone]}`}>
        {label}
      </span>

      {tip && (
        <span
          className={`pointer-events-none absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-[110%] flex-col items-center ${
            open ? "flex" : "hidden group-hover:flex"
          }`}
          style={{ marginLeft: shift }}
        >
          <span
            ref={tooltipRef}
            className="inline-block w-max max-w-[calc(100vw-16px)] whitespace-pre break-keep text-center leading-snug rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {tip}
          </span>
          <span className="mt-0 block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95" />
        </span>
      )}
    </span>
  );
}

export default function TokenText({
  text,
  lang,
}: {
  text: string;
  lang: "ko" | "en";
}) {
  return (
    <>
      {text.split(/(\[\[.*?\]\])/g).map((part, idx) => {
        const raw = part.match(/^\[\[(.+?)\]\]$/)?.[1];
        const token = raw?.trim() as TagId | undefined;

        if (token && TAG_LABEL[token]) {
          const tone = toneOfTag(token);
          const label = TAG_LABEL[token][lang];
          const tip = TAG_DESC?.[token]?.[lang];

          return (
            <TokenPill key={idx} label={label} tip={tip} tone={tone} />
          );
        }


return (
  <span key={idx}>
    {part.split(/(https?:\/\/[^\s\)\],]+)/g)
.map((seg, j) => {
      if (/^https?:\/\//.test(seg)) {
        return (
          <a
            key={`${idx}-u-${j}`}
            href={seg}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto relative z-10 inline-flex items-center rounded-md bg-slate-700/70 px-2 py-0.5 text-xs font-semibold text-sky-300 ring-1 ring-white/10 hover:bg-slate-600/70"


          >
            링크
          </a>
        );
      }
      return <span key={`${idx}-t-${j}`}>{seg}</span>;
    })}
  </span>
);


      })}
    </>
  );
}
