"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import questions from "../data/questions";
import tiers from "../data/tiers";

type Lang = "ko" | "en";

const PLACEHOLDER_TOTAL = 100;

const TIER_COLORS: Record<string, string> = {
  iron:        "text-slate-400",
  bronze:      "text-amber-700",
  silver:      "text-slate-300",
  gold:        "text-yellow-400",
  platinum:    "text-teal-400",
  emerald:     "text-emerald-400",
  diamond:     "text-blue-400",
  master:      "text-purple-400",
  grandmaster: "text-red-400",
  challenger:  "text-cyan-300",
};

export default function ResultClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const rawAnswers = searchParams.get("a") ?? "";
  const userAnswers = rawAnswers.split(",").map(Number);

  const { score, totalPoints } = useMemo(() => {
    if (questions.length === 0) {
      return { score: 0, totalPoints: PLACEHOLDER_TOTAL };
    }
    let earned = 0;
    let total = 0;
    questions.forEach((q, i) => {
      total += q.point;
      if (userAnswers[i] === q.answer) earned += q.point;
    });
    return { score: earned, totalPoints: total };
  }, [userAnswers]);

  const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

  const tier = useMemo(() => {
    const sorted = [...tiers].sort((a, b) => b.min - a.min);
    return sorted.find((t) => percentage >= t.min) ?? tiers[0];
  }, [percentage]);

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="space-y-10">
      <SiteHeader
        subtitle={lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge"}
      />

      {/* 결과 카드 */}
      <div className="max-w-md mx-auto space-y-6">
        <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-8 text-center space-y-4">
          {/* 티어 */}
          <p className={`text-4xl font-extrabold ${TIER_COLORS[tier.tier]}`}>
            {tier.label[lang]}
          </p>

          {/* 점수 */}
          <p className="text-slate-300 text-lg">
            <span className="text-yellow-400 font-bold text-2xl">{score}</span>
            <span className="text-slate-500 text-base"> / {totalPoints}</span>
            {lang === "ko" ? "점" : " pts"}
          </p>

          {/* 점수 바 */}
          <div className="w-full h-2 rounded-full bg-slate-700">
            <div
              className="h-2 rounded-full bg-yellow-400 transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-slate-500 text-xs">{percentage}%</p>

          {/* 문항 수 */}
          {questions.length > 0 && (
            <p className="text-slate-500 text-sm">
              {lang === "ko"
                ? `${questions.length}문항 중 ${userAnswers.filter((a, i) => a === questions[i]?.answer).length}개 정답`
                : `${userAnswers.filter((a, i) => a === questions[i]?.answer).length} / ${questions.length} correct`}
            </p>
          )}
        </div>

        {/* 버튼 3개 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShare}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition"
          >
            {copied
              ? lang === "ko" ? "복사됨!" : "Copied!"
              : lang === "ko" ? "공유하기" : "Share"}
          </button>

          <a
            href={`/${locale}/exam`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold text-center hover:bg-slate-600 active:scale-95 transition"
          >
            {lang === "ko" ? "다시 풀기" : "Retry"}
          </a>

          <a
            href={`/${locale}/exam/explain`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-bold text-center hover:brightness-110 active:scale-95 transition"
          >
            {lang === "ko" ? "해설집 보기" : "Explanations"}
          </a>
        </div>
      </div>
    </div>
  );
}
