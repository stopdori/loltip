"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import questions from "../data/questions";

type Lang = "ko" | "en";

const PLACEHOLDER_QUESTIONS = [
  {
    id: 1,
    question: {
      ko: "애니비아가 알 상태일 때 블리츠크랭크의 로켓 그랩에 맞으면?",
      en: "What happens when Blitzcrank's Rocket Grab hits Anivia in egg form?",
    },
    options: [
      { ko: "알이 끌려온다", en: "The egg gets pulled" },
      { ko: "그랩이 무효화된다", en: "The grab is negated" },
      { ko: "알이 즉사한다", en: "The egg dies instantly" },
      { ko: "블리츠크랭크가 튕겨진다", en: "Blitzcrank gets knocked back" },
    ],
    answer: 0,
    point: 10,
    difficulty: "easy" as const,
  },
];

export default function QuizClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const router = useRouter();

  const data = questions.length > 0 ? questions : PLACEHOLDER_QUESTIONS;
  const total = data.length;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null));
  const [selected, setSelected] = useState<number | null>(null);

  const q = data[current];
  const isLast = current === total - 1;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const next = [...answers];
    next[current] = selected;

    if (isLast) {
      const encoded = next.map((a) => (a ?? -1)).join(",");
      router.push(`/${locale}/exam/result?a=${encoded}`);
    } else {
      setAnswers(next);
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  const difficultyColor: Record<string, string> = {
    easy: "text-emerald-400",
    normal: "text-yellow-400",
    hard: "text-red-400",
  };

  const difficultyLabel: Record<string, { ko: string; en: string }> = {
    easy:   { ko: "쉬움",   en: "Easy"   },
    normal: { ko: "보통",   en: "Normal" },
    hard:   { ko: "어려움", en: "Hard"   },
  };

  return (
    <div className="space-y-8">
      <SiteHeader
        subtitle={lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge"}
      />

      {/* 진행바 */}
      <div className="max-w-2xl mx-auto space-y-1">
        <div className="flex justify-between text-xs text-slate-400">
          <span>{lang === "ko" ? `${current + 1} / ${total} 문항` : `${current + 1} / ${total}`}</span>
          <span className={difficultyColor[q.difficulty]}>
            {difficultyLabel[q.difficulty][lang]}
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-700">
          <div
            className="h-1.5 rounded-full bg-yellow-400 transition-all"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* 문제 카드 */}
      <div className="max-w-2xl mx-auto space-y-5">
        {/* 이미지 placeholder */}
        <div className="w-full h-40 rounded-2xl bg-slate-700/50 ring-1 ring-white/10 flex items-center justify-center">
          <span className="text-slate-500 text-sm">
            {lang === "ko" ? "이미지 영역" : "Image placeholder"}
          </span>
        </div>

        {/* 문제 텍스트 */}
        <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5">
          <p className="text-slate-200 text-sm leading-relaxed">
            <span className="text-yellow-400 font-bold mr-2">Q{current + 1}.</span>
            {q.question[lang]}
          </p>
        </div>

        {/* 4지선다 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={[
                "rounded-xl ring-1 px-4 py-3 text-sm text-left transition active:scale-95",
                selected === i
                  ? "bg-yellow-400/20 ring-yellow-400 text-yellow-300 font-semibold"
                  : "bg-slate-700/50 ring-white/10 text-slate-300 hover:ring-white/30 hover:bg-slate-700",
              ].join(" ")}
            >
              <span className="font-bold mr-2">{i + 1}.</span>
              {opt[lang]}
            </button>
          ))}
        </div>

        {/* 다음 / 제출 버튼 */}
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="px-6 py-2.5 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:brightness-110 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isLast
              ? lang === "ko" ? "제출하기" : "Submit"
              : lang === "ko" ? "다음 문항 →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
