"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
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
  const locale = useLocale();
  // 문제 순서는 마운트 후(클라이언트)에만 뽑는다. 초기값을 렌더 중에 Math.random()으로
  // 뽑으면 SSR HTML에 요청마다 다른 질문 텍스트/매치업 링크가 그대로 실려 나가서,
  // 크롤할 때마다 본문이 바뀌어 보이고 서버/클라이언트 랜덤값이 달라 하이드레이션도 어긋난다.
  // null인 동안(SSR + 첫 하이드레이션)에는 정적 헤더와 /quiz 링크만 렌더링한다.
  const [shuffled, setShuffled] = useState<number[] | null>(null);
  const [pos, setPos] = useState(0);
  const [phase, setPhase] = useState<Phase>("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setShuffled(shuffle(quizData.length)); }, []);

  const mounted = shuffled !== null;
  const idx = shuffled ? shuffled[pos] : null;

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
    if (!shuffled) return;
    const nextPos = pos + 1 >= shuffled.length ? 0 : pos + 1;
    goTo(nextPos, shuffled, "up");
  }

  function prev() {
    if (!shuffled) return;
    const nextPos = pos === 0 ? shuffled.length - 1 : pos - 1;
    goTo(nextPos, shuffled, "down");
  }

  useEffect(() => {
    if (!shuffled) return;
    clearTimer();
    timerRef.current = setTimeout(next, 7000);
    return clearTimer;
  }, [pos, shuffled]);

  const item = idx !== null ? quizData[idx] : null;
  const pair = item ? [item.link.champ1, item.link.champ2].sort().join("-vs-") : null;
  const url = item && pair ? `/${locale}/matchup/${pair}?highlight=${item.link.highlight}` : null;
  return (
    <div className={`flex items-center gap-1 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {/* 박스 전체 클릭(매치업으로 이동)은 바깥 <a>로 감싸지 않고, 아래 오버레이 <a>(stretched link)로
          처리한다 — 예전엔 바깥 <a> 안에 "퀴즈 목록으로" <a>가 중첩돼 HTML 표준 위반이었음.
          헤더의 버튼/링크는 relative z-10으로 오버레이 위에 올려 각자 클릭을 받는다. */}
      <div className="relative flex-1 block rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4 overflow-hidden hover:ring-yellow-400/60 transition-all min-h-[120px]">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <p className="text-base font-bold text-yellow-400 tracking-wide uppercase mr-1.5">
              {lang === "ko" ? "판정 퀴즈" : "Ruling Quiz"}
            </p>
            <span className="relative z-10 flex flex-row" style={{ gap: 0, lineHeight: 1 }}>
              <button
                type="button"
                onClick={prev}
                aria-label="이전 퀴즈"
                className="text-white/60 hover:text-white transition-colors leading-none"
                style={{ fontSize: "16px" }}
              >
                ▲
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="다음 퀴즈"
                className="text-white/60 hover:text-white transition-colors leading-none"
                style={{ fontSize: "16px" }}
              >
                ▼
              </button>
            </span>
          </div>
          <a
            href={`/${locale}/quiz`}
            className="relative z-10 text-base text-white hover:text-yellow-400 transition-colors"
          >
            {lang === "ko" ? "퀴즈 목록으로 →" : "All Quizzes →"}
          </a>
        </div>

        {/* 질문 — 마운트 전(SSR 포함)에는 비어 있고, min-h가 자리를 유지한다 */}
        <div className="min-h-[4.5rem] sm:min-h-0" style={{ overflow: "hidden" }}>
          {item && (
            <div style={phaseStyle[phase]}>
              <p className="text-sm text-slate-200 leading-relaxed">
                {item.question[lang]}
              </p>
            </div>
          )}
        </div>

        {/* 박스 전체 클릭용 오버레이 링크 (마운트 후 문제가 정해진 뒤에만 존재) */}
        {url && item && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.question[lang]}
            className="absolute inset-0 rounded-2xl"
          />
        )}
      </div>
    </div>
  );
}
