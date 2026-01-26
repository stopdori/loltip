"use client";

import { useEffect, useState } from "react";
import {
  getMatchupSummary,
  type MatchupLoadResult,
} from "../data/matchups/_index";

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
      <h3 className="mb-4 text-lg font-extrabold text-slate-100">
        핵심 요약
      </h3>

      {/* ✅ 정상 */}
      {result?.status === "ok" && (
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200">
          {/* 내 챔피언 요약 먼저 */}
          {(result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).map(
            (text, idx) => (
              <li
                key={`my-${idx}`}
                className="whitespace-pre-line"
              >
                {text}
              </li>
            )
          )}

          {/* 상대 챔피언 요약 다음 */}
          {(result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).map(
            (text, idx) => (
              <li
                key={`enemy-${idx}`}
                className="whitespace-pre-line"
              >
                {text}
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
