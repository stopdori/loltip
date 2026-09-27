"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import RemoteBar from "../RemoteBar";
import { getExamQuestions } from "../data";
import { DIFFICULTY_POINTS, EXAM_VERSION } from "../data/config";
import { loadExamProgress, encodeAnswers, type ExamProgress } from "../useExamProgress";

type Lang = "ko" | "en";

export default function ReviewClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const router = useRouter();

  const data = getExamQuestions();
  const total = data.length;

  const [progress, setProgress] = useState<ExamProgress | null | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const saved = loadExamProgress(total);
    if (!saved || !saved.completed) {
      router.replace(`/${locale}/exam`);
      return;
    }
    setProgress(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subtitle = lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge";

  if (progress === undefined || progress === null) {
    return (
      <div className="space-y-8">
        <SiteHeader subtitle={subtitle} />
        <p className="text-center text-slate-400 text-sm">{lang === "ko" ? "불러오는 중..." : "Loading..."}</p>
      </div>
    );
  }

  const q = data[current];
  const points = DIFFICULTY_POINTS[q.difficulty];
  const userAnswer = progress.answers[current];
  const answered = userAnswer !== null;
  const isLast = current === total - 1;
  const resultHref = `/${locale}/exam/result?v=${EXAM_VERSION}&a=${encodeAnswers(progress.answers)}`;

  function goTo(index: number) {
    if (index < 0 || index >= total) return;
    setCurrent(index);
  }

  const pair = [q.source.champ1, q.source.champ2].sort().join("-vs-");
  const matchupHref = `/${locale}/matchup/${pair}?highlight=${q.source.highlight}`;
  const difficulties = data.map((item) => item.difficulty);

  return (
    <div className="space-y-8">
      <SiteHeader subtitle={subtitle} />

      {/* 이 화면엔 보이는 제목 자리가 없어 시각 변화 없는 sr-only h1을 둔다(로고가 h1에서 내려와 h1이 0개가 되는 것 방지) */}
      <h1 className="sr-only">{lang === "ko" ? "롤 능력고사 채점" : "LoL Matchup Exam Review"}</h1>

      {/* 리모컨 */}
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-300 font-semibold">
              {current + 1} / {total}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-yellow-400/15 text-yellow-300 text-xs font-bold">
              {lang === "ko" ? `${points}점` : `${points}pts`}
            </span>
          </div>
          <a
            href={resultHref}
            className="px-4 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-bold hover:brightness-110 active:scale-95 transition"
          >
            {lang === "ko" ? "결과로 돌아가기" : "Back to result"}
          </a>
        </div>

        <RemoteBar
          total={total}
          current={current}
          difficulties={difficulties}
          getState={(i) => {
            const a = progress.answers[i];
            if (a === null) return "unanswered";
            return a === data[i].answer ? "correct" : "incorrect";
          }}
          onSelect={goTo}
        />
      </div>

      {/* 문제 카드 */}
      <div className="max-w-2xl mx-auto space-y-5">
        <div className="w-full h-40 rounded-2xl bg-slate-700/50 ring-1 ring-white/10 flex items-center justify-center">
          <span className="text-slate-500 text-sm">
            {lang === "ko" ? "이미지 영역" : "Image placeholder"}
          </span>
        </div>

        {/* 문제 텍스트 — 문항마다 줄 수가 달라도 카드 높이가 안 바뀌도록 최소 높이 확보 */}
        <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5 min-h-28 flex items-center">
          <p className="text-slate-200 text-sm leading-relaxed">
            <span className="text-yellow-400 font-bold mr-2">Q{current + 1}.</span>
            {q.question[lang]}
          </p>
        </div>

        {!answered ? (
          <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5 text-center text-slate-400 text-sm">
            {lang === "ko" ? "풀지 않은 문항이에요" : "You didn't answer this one"}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt, i) => {
                const isCorrectOption = i === q.answer;
                const isUserPick = i === userAnswer;
                return (
                  <div
                    key={i}
                    className={[
                      "rounded-xl ring-1 px-4 py-3 text-sm text-left",
                      isCorrectOption
                        ? "bg-emerald-400/20 ring-emerald-400 text-emerald-300 font-semibold"
                        : isUserPick
                          ? "bg-red-400/20 ring-red-400 text-red-300 font-semibold"
                          : "bg-slate-700/30 ring-white/10 text-slate-400",
                    ].join(" ")}
                  >
                    <span className="font-bold mr-2">{i + 1}.</span>
                    {opt[lang]}
                    {isCorrectOption && (
                      <span className="ml-2 text-xs opacity-80">
                        {lang === "ko" ? "(정답)" : "(Correct)"}
                      </span>
                    )}
                    {isUserPick && !isCorrectOption && (
                      <span className="ml-2 text-xs opacity-80">
                        {lang === "ko" ? "(내 답)" : "(Your pick)"}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {q.explanation && (
              <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-5">
                <p className="text-slate-300 text-sm leading-relaxed">{q.explanation[lang]}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={matchupHref}
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2 transition"
              >
                {lang === "ko" ? "근거 매치업 보기 →" : "See the matchup →"}
              </a>
              {q.youtube && (
                <a
                  href={q.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200 underline underline-offset-2 transition"
                >
                  {lang === "ko" ? "판정 영상 보기 →" : "Watch the ruling →"}
                </a>
              )}
            </div>
          </>
        )}

        {/* 이전 / 다음 */}
        <div className="flex justify-between">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="px-6 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {lang === "ko" ? "← 이전" : "← Prev"}
          </button>
          <button
            onClick={() => goTo(current + 1)}
            disabled={isLast}
            className="px-6 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {lang === "ko" ? "다음 →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
