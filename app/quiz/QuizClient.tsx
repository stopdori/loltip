"use client";

import { useEffect, useState } from "react";
import { quizData } from "../data/quiz";

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
      ? "챔피언 간 상호작용을 맞혀보세요"
      : "Test your knowledge of champion interactions";
  const answerLabel = lang === "ko" ? "정답 확인" : "Check Answer";

  function handleAnswer(champ1: string, champ2: string, highlight: string) {
    const pair = [champ1, champ2].sort().join("-vs-");
    const url = `/matchup/${pair}?first=${champ1}&highlight=${highlight}`;
    window.open(url, "_blank");
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="relative text-center">
        {/* 언어 선택 버튼 */}
        <div className="mt-4 flex items-center gap-2 justify-end lg:absolute lg:right-4 lg:top-4 lg:mt-0">
          <button
            onClick={() => setLangAndPersist("ko")}
            className={`px-3 py-2 rounded-xl text-sm font-bold border ${
              lang === "ko"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-slate-800/60 border-white/10"
            }`}
          >
            한글
          </button>
          <button
            onClick={() => setLangAndPersist("en")}
            className={`px-3 py-2 rounded-xl text-sm font-bold border ${
              lang === "en"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-slate-800/60 border-white/10"
            }`}
          >
            EN
          </button>
        </div>

        <h1
          onClick={() => (window.location.href = "/champ")}
          className="inline-block text-5xl font-extrabold text-yellow-400 hover:brightness-110 cursor-pointer"
        >
          LOLTIP
        </h1>
        <p className="mt-3 text-slate-300">{subtitle}</p>
      </header>

      {/* Page title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
        <p className="mt-1 text-sm text-slate-400">
          {lang === "ko"
            ? `총 ${quizData.length}문제`
            : `${quizData.length} questions`}
        </p>
      </div>

      {/* Quiz list */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {quizData.map((item, i) => (
          <div
            key={item.id}
            className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            {/* Question number */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold text-sm flex items-center justify-center">
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
