"use client";

import { useEffect, useState } from "react";
import TokenText from "./TokenText";
import { getMatchupSummary, type MatchupLoadResult } from "../data/matchups/_index";

type Lang = "ko" | "en";


export default function MatchupSummaryBox({
  myChampId,
  enemyChampId,
  lang,
}: {
  myChampId: string;
  enemyChampId: string;
  lang: Lang;
}) {
  const [result, setResult] = useState<MatchupLoadResult | null>(null);

  useEffect(() => {
    getMatchupSummary(myChampId, enemyChampId).then(setResult);
  }, [myChampId, enemyChampId]);


  return (
  <div className="rounded-3xl bg-slate-800/25 ring-2 ring-black/40 p-8">

    {/* 판정 요약 */}
    {result?.status === "ok" && result.data.summary?.[lang]?.length > 0 && (
      <div className="mb-6 rounded-2xl bg-slate-900/40 ring-1 ring-yellow-400/30 p-5">
        <h3 className="mb-3 text-lg font-extrabold text-yellow-300">판정 요약</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-100">
          {result.data.summary[lang].map((text, idx) => (
            <li key={`summary-${idx}`} className="whitespace-pre-line">
              <TokenText text={text} lang={lang} />
            </li>
          ))}
        </ul>
      </div>
    )}

    <h3 className="mb-4 text-lg font-extrabold text-slate-100">판정 세부사항</h3>

 
      {/* ✅ 정상 */}
      {result?.status === "ok" && (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200">
          {/* 내 챔피언 요약 먼저 */}
          {(result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).map(
            (text, idx) => (
              <li key={`my-${idx}`} className="whitespace-pre-line">
  <TokenText text={text} lang={lang} />

</li>
            )
          )}

          {/* 상대 챔피언 요약 다음 */}
          {(result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).map(
            (text, idx) => (
              <li key={`enemy-${idx}`} className="whitespace-pre-line">
  <TokenText text={text} lang={lang} />

</li>

            )
          )}
        </ul>
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