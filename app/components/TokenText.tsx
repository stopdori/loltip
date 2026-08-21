// app/components/TokenText.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { TAG_LABEL, TAG_DESC, type TagId } from "../data/interactions";
import { GIMMICK_TAG_LABEL, GIMMICK_TAG_DESC, type GimmickTagId } from "../data/interactions/tags_gimmick";
import { toneOfTag, NOTE_TONE_CLASS } from "../data/interactions/tagTone";
import type { Tone } from "../data/interactions/tagTone";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function TokenPill({
  label,
  tip,
  tone,
}: {
  label: string;
  tip?: string;
  tone: Tone;
}) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;
    const vw = window.innerWidth;
    const MARGIN = 8;
    const anchorCenterX = a.left + a.width / 2;
    const left = clamp(anchorCenterX, MARGIN + t.width / 2, vw - MARGIN - t.width / 2);
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
      className="relative inline-flex align-baseline"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={(e) => {
        if (!tip) return;
        e.preventDefault();
        open ? onLeave() : onEnter();
      }}
    >
      <span className={`inline cursor-help hover:opacity-90 ${NOTE_TONE_CLASS[tone]}`}>
        {label}
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

function VideoLinkIcon({ url, lang }: { url: string; lang: "ko" | "en" }) {
  const label = lang === "ko" ? "클립" : "Clip";
  const title = lang === "ko" ? "관련 클립 보기" : "Watch related clip";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto relative z-10 inline-flex items-center gap-1 rounded-md bg-red-600 px-2 py-0.5 text-xs font-medium text-white/85 ring-1 ring-white/10 hover:bg-red-500 transition-colors align-middle ml-1 -mt-0.5"
      aria-label={title}
      title={title}
    >
      {label}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.5 6.5 6 3.5-6 3.5v-7z" />
      </svg>
    </a>
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

        const clipUrl = raw?.trim().match(/^CLIP:(.+)$/)?.[1]?.trim();
        if (clipUrl) {
          return <VideoLinkIcon key={idx} url={clipUrl} lang={lang} />;
        }

        const labelData = GIMMICK_TAG_LABEL[token as GimmickTagId] ?? TAG_LABEL[token as TagId];

        if (token && labelData) {
          const tone = toneOfTag(token as TagId | GimmickTagId);
          const label = labelData[lang];
          const tip = GIMMICK_TAG_DESC?.[token as GimmickTagId]?.[lang]
                   ?? TAG_DESC?.[token as TagId]?.[lang];

          return (
            <TokenPill key={idx} label={label} tip={tip} tone={tone} />
          );
        }


return (
  <span key={idx}>
    {part.split(/(https?:\/\/[^\s\],]+)/g)
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
            {lang === "ko" ? "링크" : "Link"}
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
