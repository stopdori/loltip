"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import RemoteBar from "../RemoteBar";
import { getExamQuestions } from "../data";
import { DIFFICULTY_POINTS, EXAM_VERSION } from "../data/config";
import { loadExamProgress, saveExamProgress, clearExamProgress, encodeAnswers } from "../useExamProgress";

type Lang = "ko" | "en";

export default function PaperClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const router = useRouter();

  const data = getExamQuestions();
  const total = data.length;

  const [hydrated, setHydrated] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(total).fill(null));
  const [confirmingSubmit, setConfirmingSubmit] = useState(false);
  const [blinkOn, setBlinkOn] = useState(false);
  const [blinkTrigger, setBlinkTrigger] = useState(0);

  useEffect(() => {
    const saved = loadExamProgress(total);
    if (saved && !saved.completed) {
      setCurrent(saved.current);
      setAnswers(saved.answers);
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const q = data[current];
  const points = DIFFICULTY_POINTS[q.difficulty];
  const isLast = current === total - 1;
  const unansweredCount = answers.filter((a) => a === null).length;
  const difficulties = data.map((item) => item.difficulty);

  // 안 푼 칸에 하늘색 외곽선이 켜졌다 꺼지기를 두 번 반복
  useEffect(() => {
    if (blinkTrigger === 0) return;
    setBlinkOn(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setBlinkOn((v) => !v);
      if (count >= 3) clearInterval(interval);
    }, 250);
    return () => clearInterval(interval);
  }, [blinkTrigger]);

  function goTo(index: number) {
    if (index < 0 || index >= total) return;
    setCurrent(index);
    saveExamProgress({ answers, current: index, completed: false, revealed: false });
  }

  function handleSelect(idx: number) {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
    saveExamProgress({ answers: next, current, completed: false, revealed: false });
  }

  function submit(finalAnswers: (number | null)[]) {
    saveExamProgress({ answers: finalAnswers, current, completed: true, revealed: false });
    router.push(`/${locale}/exam/result?v=${EXAM_VERSION}&a=${encodeAnswers(finalAnswers)}`);
  }

  function attemptSubmit() {
    if (unansweredCount > 0) {
      setConfirmingSubmit(true);
      return;
    }
    submit(answers);
  }

  function handleContinueFilling() {
    setConfirmingSubmit(false);
    setBlinkTrigger((t) => t + 1);
  }

  function handleForceSubmit() {
    setConfirmingSubmit(false);
    submit(answers);
  }

  function handleRestart() {
    const confirmed = window.confirm(
      lang === "ko" ? "기록이 모두 지워져요. 처음부터 다시 풀까요?" : "This clears all progress. Restart from the beginning?"
    );
    if (!confirmed) return;
    clearExamProgress();
    setAnswers(Array(total).fill(null));
    setCurrent(0);
  }

  const subtitle = lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge";

  if (!hydrated) {
    return (
      <div className="space-y-8">
        <SiteHeader subtitle={subtitle} />
        <p className="text-center text-slate-400 text-sm">
          {lang === "ko" ? "불러오는 중..." : "Loading..."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SiteHeader subtitle={subtitle} />

      {/* 이 화면엔 보이는 제목 자리가 없어 시각 변화 없는 sr-only h1을 둔다(로고가 h1에서 내려와 h1이 0개가 되는 것 방지) */}
      <h1 className="sr-only">{lang === "ko" ? "롤 능력고사" : "LoL Matchup Exam"}</h1>

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
            <button
              onClick={handleRestart}
              className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-2 transition"
            >
              {lang === "ko" ? "처음부터" : "Restart"}
            </button>
          </div>
          <button
            onClick={attemptSubmit}
            className="px-4 py-1.5 rounded-lg bg-yellow-400 text-black text-xs font-bold hover:brightness-110 active:scale-95 transition"
          >
            {lang === "ko" ? "제출하기" : "Submit"}
          </button>
        </div>

        <RemoteBar
          total={total}
          current={current}
          difficulties={difficulties}
          getState={(i) => (answers[i] !== null ? "answered" : "unanswered")}
          isBlinking={(i) => blinkOn && answers[i] === null}
          onSelect={goTo}
        />
      </div>

      {/* 문제 카드 */}
      <div className="max-w-2xl mx-auto space-y-5">
        {/* 이미지 placeholder */}
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

        {/* 4지선다 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={[
                "rounded-xl ring-1 px-4 py-3 text-sm text-left transition active:scale-95",
                answers[current] === i
                  ? "bg-yellow-400/20 ring-yellow-400 text-yellow-300 font-semibold"
                  : "bg-slate-700/50 ring-white/10 text-slate-300 hover:ring-white/30 hover:bg-slate-700",
              ].join(" ")}
            >
              <span className="font-bold mr-2">{i + 1}.</span>
              {opt[lang]}
            </button>
          ))}
        </div>

        {/* 이전 / 다음 / 제출 버튼 */}
        <div className="flex justify-between">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="px-6 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {lang === "ko" ? "← 이전" : "← Prev"}
          </button>
          <button
            onClick={isLast ? attemptSubmit : () => goTo(current + 1)}
            className="px-6 py-2.5 rounded-xl bg-yellow-400 text-black font-bold text-sm hover:brightness-110 active:scale-95 transition"
          >
            {isLast
              ? lang === "ko" ? "제출하기" : "Submit"
              : lang === "ko" ? "다음 →" : "Next →"}
          </button>
        </div>
      </div>

      {/* 제출 확인 팝업 */}
      {confirmingSubmit && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setConfirmingSubmit(false)} />
          <div className="absolute left-1/2 top-1/2 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl p-6 space-y-4 text-center">
            <p className="text-slate-200 text-sm">
              {lang === "ko"
                ? `아직 ${unansweredCount}문항을 풀지 않았어요. 안 푼 문항은 오답 처리돼요.`
                : `You still have ${unansweredCount} unanswered. Unanswered questions count as wrong.`}
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleForceSubmit}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition"
              >
                {lang === "ko" ? "그대로 제출" : "Submit anyway"}
              </button>
              <button
                onClick={handleContinueFilling}
                className="flex-1 px-4 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-bold hover:brightness-110 active:scale-95 transition"
              >
                {lang === "ko" ? "계속 풀기" : "Keep going"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
