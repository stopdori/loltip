"use client";

import { useEffect, useRef, useState } from "react";
import TokenText from "./TokenText";
import type { MatchupLoadResult } from "../data/matchups/_index";
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

  const my = CHAMPIONS.find((c) => c.id === myChampId);
  const enemy = CHAMPIONS.find((c) => c.id === enemyChampId);
  const fmt = (champ: typeof my) => {
    if (!champ) return "";
    const name = lang === "ko" ? champ.ko : champ.en;
    const al = lang === "ko" ? (champ.aliases?.ko ?? []) : (champ.aliases?.en ?? []);
    return al.length > 0 ? `${name}(${al.join(", ")})` : name;
  };

  useEffect(() => {
    fetch(`/api/matchup?a=${encodeURIComponent(myChampId)}&b=${encodeURIComponent(enemyChampId)}`)
      .then((res) => res.json())
      .then(setResult);
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
  <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 transition-all min-h-[120px]">

    <div className="flex items-baseline justify-between mb-3">
      <h3 className="text-base font-bold text-yellow-400 tracking-wide uppercase">{lang === "ko" ? "판정 세부사항" : "Interaction Details"}</h3>
    </div>

 
      {/* ✅ 정상 */}
      {result?.status === "ok" && (() => {
        const myItems = result.data.highlightsByChamp?.[myChampId]?.[lang] ?? [];
        const enemyItems = result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? [];
        const commonItems = result.data.common?.[lang] ?? [];

        const showMyEnemyDivider = !!my && !!enemy;
        const showEnemyCommonDivider = commonItems.length > 0 && (!!my || !!enemy);

        const groupWrapperClass =
          "rounded-lg -mx-2 px-2 py-1 transition-colors duration-150 hover:bg-slate-900/60";
        const listClass = "list-disc pl-5 space-y-2";

        return (
          <div className="text-sm text-slate-200">
            {/* 내 챔피언 요약 먼저 */}
            {my && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(my)}</p>
                {myItems.length > 0 && (
                  <ul className={listClass}>
                    {myItems.map((text, idx) => {
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
                    })}
                  </ul>
                )}
              </div>
            )}

            {showMyEnemyDivider && (
              <div className="my-3 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" aria-hidden="true" />
            )}

            {/* 상대 챔피언 요약 다음 */}
            {enemy && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(enemy)}</p>
                {enemyItems.length > 0 && (
                  <ul className={listClass}>
                    {enemyItems.map((text, idx) => {
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
                    })}
                  </ul>
                )}
              </div>
            )}

            {showEnemyCommonDivider && (
              <div className="my-3 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" aria-hidden="true" />
            )}

            {/* 공통 항목: 좌우 배치와 무관하게 항상 맨 아래 */}
            {commonItems.length > 0 && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{lang === "ko" ? "공통" : "Common"}</p>
                <ul className={listClass}>
                  {commonItems.map((text, idx) => (
                    <li key={`common-${idx}`} className="whitespace-pre-line">
                      <TokenText text={text} lang={lang} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })()}

      {/* 내용 없음 */}
      {result?.status === "ok" &&
        (result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).length === 0 &&
        (result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).length === 0 &&
        (result.data.common?.[lang] ?? []).length === 0 && (
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