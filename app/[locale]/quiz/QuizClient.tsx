"use client";

import { useLocale } from "next-intl";
import { quizData } from "@/app/data/quiz";
import SiteHeader from "@/app/components/SiteHeader";

type Lang = "ko" | "en";

export default function QuizClient() {
  const locale = useLocale();
  const lang = locale as Lang;

  const title = lang === "ko" ? "롤 상호작용 퀴즈" : "LoL Interaction Quiz";
  const subtitle =
    lang === "ko"
      ? "신기하거나 궁금할만한 상호작용"
      : "Interesting and curious champion interactions";
  const answerLabel = lang === "ko" ? "정답" : "Answer";

  function handleAnswer(champ1: string, champ2: string, highlight: string) {
    const pair = [champ1, champ2].sort().join("-vs-");
    const url = `/${locale}/matchup/${pair}?first=${champ1}&highlight=${highlight}`;
    window.open(url, "_blank");
  }

  return (
    <div className="space-y-10">
      <SiteHeader
        subtitle={subtitle}
      />

      {/* Page title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      </div>

      {/* Quiz list */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {quizData.map((item, i) => (
          <div
            key={item.id}
            className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5 flex flex-row items-center gap-4 min-h-[110px] sm:min-h-[80px]"
          >
            {/* Question number */}
            <div className="flex-shrink-0 w-9 h-9 font-extrabold text-2xl text-yellow-400 flex items-center justify-center">
              {i + 1}
            </div>

            {/* Question text */}
            <p className="flex-1 text-slate-200 text-sm leading-relaxed">
              {item.question[lang]}
            </p>

            {/* Answer button */}
            <button
              onClick={() =>
                handleAnswer(
                  item.link.champ1,
                  item.link.champ2,
                  item.link.highlight
                )
              }
              className="flex-shrink-0 px-4 py-2 rounded-xl bg-yellow-400 text-black text-sm font-bold hover:brightness-110 active:scale-95 transition"
            >
              {answerLabel}
            </button>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="text-center">
        <a
          href={`/${locale}/champ`}
          className="text-sm text-slate-400 hover:text-slate-200 underline underline-offset-2 transition"
        >
          {lang === "ko" ? "← 챔피언 가이드로 돌아가기" : "← Back to Champion Guide"}
        </a>
      </div>
    </div>
  );
}
