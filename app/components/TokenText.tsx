// app/components/TokenText.tsx
"use client";

import { TAG_DESC, type TagId } from "../data/interactions/tags";
import { GIMMICK_TAG_DESC, type GimmickTagId } from "../data/interactions/tags_gimmick";
import { STAT_ICONS } from "../data/interactions/statIcons";
import { toTokenSegments, type TokenSegment } from "../data/interactions/parseTagTokens";
import { NOTE_TONE_CLASS, toneOfTag } from "../data/interactions/tagTone";
import TagPill from "./TagPill";
import VerdictIcon from "./VerdictIcon";

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

// text(원문, [[TAG]] 포함)를 넘기면 여기서 파싱하고, segments(서버가 toTokenSegments로 미리
// 만든 조각)를 넘기면 그대로 그린다 — 둘의 렌더링 결과는 같다. 챔피언 페이지는 원문 토큰을
// 클라이언트 페이로드에 싣지 않으려고 segments를 쓴다.
export default function TokenText({
  text,
  segments,
  lang,
}: {
  text?: string;
  segments?: TokenSegment[];
  lang: "ko" | "en";
}) {
  const segs = segments ?? toTokenSegments(text ?? "", lang);
  return (
    <>
      {segs.map((seg, idx) => {
        if (seg.clipUrl) {
          return <VideoLinkIcon key={idx} url={seg.clipUrl} lang={lang} />;
        }

        // 판정 기호(O/X)는 글자 대신 SVG로 — SSR 본문 텍스트에 "O"/"X"가 섞이지 않게(설명 툴팁도 원래 없음)
        if (seg.tagId === "EXIST" || seg.tagId === "NOT_EXIST") {
          return <VerdictIcon key={idx} verdict={seg.tagId} className={NOTE_TONE_CLASS[toneOfTag(seg.tagId)]} />;
        }

        if (seg.tagId) {
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
