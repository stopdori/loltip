// app/components/TokenText.tsx
"use client";

import { TAG_DESC, type TagId } from "../data/interactions";
import { GIMMICK_TAG_DESC, type GimmickTagId } from "../data/interactions/tags_gimmick";
import { STAT_ICONS } from "../data/interactions/statIcons";
import { parseTagTokens } from "../data/interactions/parseTagTokens";
import TagPill from "./TagPill";

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
      {parseTagTokens(text, lang).map((seg, idx) => {
        const clipUrl = seg.raw?.match(/^CLIP:(.+)$/)?.[1]?.trim();
        if (clipUrl) {
          return <VideoLinkIcon key={idx} url={clipUrl} lang={lang} />;
        }

        if (seg.tagId && seg.tone) {
          const tip = GIMMICK_TAG_DESC?.[seg.tagId as GimmickTagId]?.[lang]
                   ?? TAG_DESC?.[seg.tagId as TagId]?.[lang];
          const statIcon = STAT_ICONS[seg.tagId];

          return (
            <TagPill
              key={idx}
              text={seg.text}
              tip={tip}
              tone="note"
              tagId={seg.tagId}
              icons={statIcon?.icons}
              direction={statIcon?.direction}
              size={statIcon?.size}
              lang={lang}
            />
          );
        }

        return (
          <span key={idx}>
            {seg.text.split(/(https?:\/\/[^\s\],]+)/g).map((sub, j) => {
              if (/^https?:\/\//.test(sub)) {
                return (
                  <a
                    key={`${idx}-u-${j}`}
                    href={sub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto relative z-10 inline-flex items-center rounded-md bg-slate-700/70 px-2 py-0.5 text-xs font-semibold text-sky-300 ring-1 ring-white/10 hover:bg-slate-600/70"
                  >
                    {lang === "ko" ? "링크" : "Link"}
                  </a>
                );
              }
              return <span key={`${idx}-t-${j}`}>{sub}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}
