// app/components/TokenText.tsx
"use client";

import { TAG_LABEL, TAG_DESC, type TagId } from "../data/interactions";
import { toneOfTag, NOTE_TONE_CLASS } from "../data/interactions/tagTone";

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
            <span key={idx} className="relative inline-flex group align-baseline">
              <span className={`inline cursor-help hover:opacity-90 ${NOTE_TONE_CLASS[tone]}`}>
                {label}
              </span>

              {tip && (
                <span className="pointer-events-none absolute left-1/2 top-0 z-50 hidden -translate-x-1/2 -translate-y-[110%] group-hover:flex flex-col items-center">
                  <span className="inline-block w-max whitespace-pre break-keep text-center leading-snug rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold text-slate-100 ring-1.5 ring-white/10 shadow-lg">
                    {tip}
                  </span>
                  <span className="mt-0 block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95" />
                </span>
              )}
            </span>
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
