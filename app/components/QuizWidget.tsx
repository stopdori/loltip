"use client";

import { useEffect, useRef, useState } from "react";
import { quizData } from "../data/quiz";

type Lang = "ko" | "en";

function shuffle(len: number): number[] {
  const arr = Array.from({ length: len }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
  const [shuffled, setShuffled] = useState<number[]>(() => shuffle(quizData.length));
  const [pos, setPos] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const idx = shuffled[pos];

  function clearTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  function goTo(nextPos: number, nextShuffled: number[], direction: "up" | "down") {
    clearTimer();
    setPhase(direction === "up" ? "out-up" : "out-down");
    setTimeout(() => {
      setShuffled(nextShuffled);
      setPos(nextPos);
      setPhase(direction === "up" ? "from-bottom" : "from-top");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("in")));
    }, 150);
  }

  function next() {
    const nextPos = pos + 1 >= shuffled.length ? 0 : pos + 1;
    goTo(nextPos, shuffled, "up");
  }

  function prev() {
    const nextPos = pos === 0 ? shuffled.length - 1 : pos - 1;
    goTo(nextPos, shuffled, "down");
  }

  useEffect(() => {
    clearTimer();
    timerRef.current = setTimeout(next, 7000);
    return clearTimer;
  }, [pos, shuffled]);

  function handlePrev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    prev();
  }

  function handleNext(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    next();
  }

  const item = quizData[idx];
  const pair = [item.link.champ1, item.link.champ2].sort().join("-vs-");
  const url = `/matchup/${pair}?first=${item.link.champ1}&highlight=${item.link.highlight}`;
  return (
    <div className="flex items-center gap-1">
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
              {lang === "ko" ? "판정 퀴즈" : "Ruling Quiz"}
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
            onClick={(e) => e.stopPropagation()}
            className="text-base text-white hover:text-yellow-400 transition-colors"
          >
            {lang === "ko" ? "퀴즈 목록으로 →" : "All Quizzes →"}
          </a>
        </div>

        {/* 질문 */}
        <div className="min-h-[4.5rem] sm:min-h-0" style={{ overflow: "hidden" }}>
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
