"use client";

import { useEffect, useRef, useState } from "react";
import TokenText from "./TokenText";
import { getMatchupSummary, type MatchupLoadResult } from "../data/matchups/_index";
import { CHAMPIONS } from "../data/champions";

type Lang = "ko" | "en";

function parseHighlight(highlight: string | undefined) {
  if (!highlight) return null;
  const parts = highlight.split("-");
  if (parts.length < 3) return null;
  const idx = parseInt(parts[parts.length - 1], 10);
  // 마지막 2개(langKey, idx) 제외한 나머지가 champId
  const champId = parts.slice(0, parts.length - 2).join("-");
  if (isNaN(idx)) return null;
  return { champId, idx };
}

export default function MatchupSummaryBox({
  myChampId,
  enemyChampId,
  lang,
  highlight,
}: {
  myChampId: string;
  enemyChampId: string;
  lang: Lang;
  highlight?: string;
}) {
  const [result, setResult] = useState<MatchupLoadResult | null>(null);
  const highlightRef = useRef<HTMLLIElement>(null);
  const parsed = parseHighlight(highlight);

  useEffect(() => {
    getMatchupSummary(myChampId, enemyChampId).then(setResult);
  }, [myChampId, enemyChampId]);

  useEffect(() => {
    if (!parsed || !result) return;
    const el = highlightRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [parsed?.champId, parsed?.idx, result]);


  return (
  <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 hover:ring-yellow-400/60 transition-all min-h-[120px]">

    <div className="flex items-baseline justify-between mb-3">
      <h3 className="text-base font-bold text-yellow-400 tracking-wide uppercase">{lang === "ko" ? "판정 세부사항" : "Interaction Details"}</h3>
      {(() => {
        const my = CHAMPIONS.find((c) => c.id === myChampId);
        const enemy = CHAMPIONS.find((c) => c.id === enemyChampId);
        const fmt = (champ: typeof my) => {
          if (!champ) return "";
          const name = lang === "ko" ? champ.ko : champ.en;
          const al = lang === "ko" ? (champ.aliases?.ko ?? []) : (champ.aliases?.en ?? []);
          return al.length > 0 ? `${name}(${al.join(", ")})` : name;
        };
        return (
          <p className="text-xs text-slate-400">
            {fmt(my)} vs {fmt(enemy)}
          </p>
        );
      })()}
    </div>

 
      {/* ✅ 정상 */}
      {result?.status === "ok" && (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200">
          {/* 내 챔피언 요약 먼저 */}
          {(result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).map(
            (text, idx) => {
              const isHighlighted = parsed?.champId === myChampId && parsed?.idx === idx;
              return (
                <li
                  key={`my-${idx}`}
                  ref={isHighlighted ? highlightRef : null}
                  className={`whitespace-pre-line${isHighlighted ? " border-2 border-yellow-400 rounded px-2 py-1" : ""}`}
                >
                  <TokenText text={text} lang={lang} />
                </li>
              );
            }
          )}

          {/* 상대 챔피언 요약 다음 */}
          {(result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).map(
            (text, idx) => {
              const isHighlighted = parsed?.champId === enemyChampId && parsed?.idx === idx;
              return (
                <li
                  key={`enemy-${idx}`}
                  ref={isHighlighted ? highlightRef : null}
                  className={`whitespace-pre-line${isHighlighted ? " border-2 border-yellow-400 rounded px-2 py-1" : ""}`}
                >
                  <TokenText text={text} lang={lang} />
                </li>
              );
            }
          )}
        </ul>
      )}

      {/* 내용 없음 */}
      {result?.status === "ok" &&
        (result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).length === 0 &&
        (result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).length === 0 && (
          <p className="text-slate-400 text-sm text-center">
            {lang === "ko" ? "특별한 상호작용 없음." : "No notable interactions."}
          </p>
        )}

      {/* ❌ 매치업 파일 문제 */}
      {result?.status === "missing" && (
        <div className="text-sm text-red-400">
          ⚠ 매치업 데이터 누락: <b>{result.key}</b>
        </div>
      )}


  </div>
  );
}