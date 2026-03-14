"use client";

import { useEffect, useRef, useState } from "react";
import { quizData } from "../data/quiz";

type Lang = "ko" | "en";

function randomIndex(exclude: number, len: number): number {
  if (len <= 1) return 0;
  let next;
  do { next = Math.floor(Math.random() * len); } while (next === exclude);
  return next;
}

type Phase = "in" | "out-up" | "out-down" | "from-bottom" | "from-top";

const phaseStyle: Record<Phase, React.CSSProperties> = {
  "in":          { opacity: 1, transform: "translateY(0)",     transition: "opacity 0.15s, transform 0.15s" },
  "out-up":      { opacity: 0, transform: "translateY(-100%)", transition: "opacity 0.15s, transform 0.15s" },
  "out-down":    { opacity: 0, transform: "translateY(100%)",  transition: "opacity 0.15s, transform 0.15s" },
  "from-bottom": { opacity: 0, transform: "translateY(100%)",  transition: "none" },
  "from-top":    { opacity: 0, transform: "translateY(-100%)", transition: "none" },
};

export default function QuizWidget({ lang }: { lang: Lang }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * quizData.length));
  const [phase, setPhase] = useState<Phase>("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  function switchTo(nextIdx: number, direction: "up" | "down" = "up") {
    setPhase(direction === "up" ? "out-up" : "out-down");
    setTimeout(() => {
      setIdx(nextIdx);
      setPhase(direction === "up" ? "from-bottom" : "from-top");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("in")));
    }, 150);
  }

  function scheduleNext() {
    clearTimer();
    timerRef.current = setTimeout(() => {
      switchTo(randomIndex(idx, quizData.length), "up");
    }, 5000);
  }

  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, [idx]);

  function handlePrev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    switchTo((idx - 1 + quizData.length) % quizData.length, "down");
  }

  function handleNext(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    switchTo((idx + 1) % quizData.length, "up");
  }

  const item = quizData[idx];
  const pair = [item.link.champ1, item.link.champ2].sort().join("-vs-");
  const url = `/matchup/${pair}?first=${item.link.champ1}&highlight=${item.link.highlight}`;

  return (
    <div className="flex items-center gap-1">
      {/* 본문 박스 */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 block rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 overflow-hidden cursor-pointer hover:ring-yellow-400/60 transition-all"
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <p className="text-base font-bold text-yellow-400 tracking-wide uppercase mr-1.5">
              {lang === "ko" ? "오늘의 퀴즈" : "Quiz"}
            </p>
            <span className="flex flex-row" style={{ gap: 0, lineHeight: 1 }}>
              <button
                onClick={handlePrev}
                aria-label="이전 퀴즈"
                className="text-white/60 hover:text-white transition-colors leading-none"
                style={{ fontSize: "16px" }}
              >
                ▲
              </button>
              <button
                onClick={handleNext}
                aria-label="다음 퀴즈"
                className="text-white/60 hover:text-white transition-colors leading-none"
                style={{ fontSize: "16px" }}
              >
                ▼
              </button>
            </span>
          </div>
          <a
            href="/quiz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-base text-white hover:text-yellow-400 transition-colors"
          >
            {lang === "ko" ? "퀴즈 목록으로 →" : "All Quizzes →"}
          </a>
        </div>

        {/* 질문 */}
        <div style={{ overflow: "hidden" }}>
        <div style={phaseStyle[phase]}>
          <p className="text-sm text-slate-200 leading-relaxed">
            {item.question[lang]}
          </p>
        </div>
        </div>
      </a>

    </div>
  );
}
