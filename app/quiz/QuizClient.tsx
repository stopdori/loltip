"use client";

import { useEffect, useState } from "react";
import { quizData } from "../data/quiz";
import SiteHeader from "../components/SiteHeader";

type Lang = "ko" | "en";
const LANG_KEY = "loltip_lang";

function readSavedLang(): Lang | null {
  const v = localStorage.getItem(LANG_KEY);
  return v === "ko" || v === "en" ? v : null;
}

function detectDefaultLang(): Lang {
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("ko") ? "ko" : "en";
}

export default function QuizClient() {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = readSavedLang();
    setLang(saved ?? detectDefaultLang());
  }, []);

  function setLangAndPersist(v: Lang) {
    setLang(v);
    localStorage.setItem(LANG_KEY, v);
  }

  const title = lang === "ko" ? "롤 상호작용 퀴즈" : "LoL Interaction Quiz";
  const subtitle =
    lang === "ko"
      ? "신기하거나 궁금할만한 상호작용"
      : "Interesting and curious champion interactions";
  const answerLabel = lang === "ko" ? "정답 확인" : "Check Answer";

  function handleAnswer(champ1: string, champ2: string, highlight: string) {
    const pair = [champ1, champ2].sort().join("-vs-");
    const url = `/matchup/${pair}?first=${champ1}&highlight=${highlight}`;
    window.open(url, "_blank");
  }

  return (
    <div className="space-y-10">
      <SiteHeader
        lang={lang}
        onLangChange={setLangAndPersist}
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
            className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5 flex flex-col sm:flex-row sm:items-center gap-4"
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
          href="/champ"
          className="text-sm text-slate-400 hover:text-slate-200 underline underline-offset-2 transition"
        >
          {lang === "ko" ? "← 챔피언 가이드로 돌아가기" : "← Back to Champion Guide"}
        </a>
      </div>
    </div>
  );
}
