"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import { getExamQuestions } from "./data";
import { EXAM_VERSION } from "./data/config";
import { loadExamProgress, clearExamProgress, encodeAnswers, type ExamProgress } from "./useExamProgress";

type Lang = "ko" | "en";

export default function ExamClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const router = useRouter();

  const questions = getExamQuestions();
  const total = questions.length;

  // undefined = 아직 localStorage 확인 전(하이드레이션 불일치 방지용 로딩 상태), null = 기록 없음
  const [progress, setProgress] = useState<ExamProgress | null | undefined>(undefined);

  useEffect(() => {
    setProgress(loadExamProgress(total));
  }, [total]);

  const title = lang === "ko" ? "롤 능력고사" : "LoL Matchup Exam";
  const subtitle =
    lang === "ko"
      ? "챔피언 상호작용 지식을 테스트해보세요"
      : "Test your champion interaction knowledge";

  const resumable = !!progress && !progress.completed;
  const completed = !!progress && progress.completed;

  function handleRestart() {
    const confirmed = window.confirm(
      lang === "ko"
        ? "처음부터 다시 풀까요? 기존 진행 기록이 삭제됩니다."
        : "Restart from the beginning? Your current progress will be deleted."
    );
    if (!confirmed) return;
    clearExamProgress();
    setProgress(null);
  }

  function handleRetake() {
    const confirmed = window.confirm(
      lang === "ko"
        ? "이전 결과와 채점 기록이 사라져요. 다시 풀까요?"
        : "This clears your previous result and review record. Retake the exam?"
    );
    if (!confirmed) return;
    clearExamProgress();
    router.push(`/${locale}/exam/quiz`);
  }

  return (
    <div className="space-y-10">
      <SiteHeader subtitle={subtitle} />

      {/* 제목 */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold text-slate-100">{title}</h1>
        <p className="text-slate-400 text-sm">
          {lang === "ko" ? `총 ${total}문항` : `${total} questions`}
        </p>
      </div>

      {/* 풀러가기 / 이어서 풀기 / 내 결과 보기 */}
      <div className="flex flex-col items-center gap-3">
        {progress === undefined ? (
          <p className="text-slate-400 text-sm">{lang === "ko" ? "불러오는 중..." : "Loading..."}</p>
        ) : completed ? (
          <>
            <a
              href={`/${locale}/exam/result?v=${EXAM_VERSION}&a=${encodeAnswers(progress!.answers)}`}
              className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-base hover:brightness-110 active:scale-95 transition"
            >
              {lang === "ko" ? "내 결과 보기" : "View My Result"}
            </a>
            <button
              onClick={handleRetake}
              className="px-5 py-2 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition"
            >
              {lang === "ko" ? "다시 풀기" : "Retake"}
            </button>
          </>
        ) : resumable ? (
          <>
            <a
              href={`/${locale}/exam/quiz`}
              className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-base hover:brightness-110 active:scale-95 transition"
            >
              {lang === "ko"
                ? `이어서 풀기 (${progress!.current + 1}/${total})`
                : `Resume (${progress!.current + 1}/${total})`}
            </a>
            <button
              onClick={handleRestart}
              className="text-sm text-slate-400 hover:text-slate-200 underline underline-offset-2 transition"
            >
              {lang === "ko" ? "처음부터 다시" : "Start over"}
            </button>
          </>
        ) : (
          <a
            href={`/${locale}/exam/quiz`}
            className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-base hover:brightness-110 active:scale-95 transition"
          >
            {lang === "ko" ? "풀러가기 →" : "Start Exam →"}
          </a>
        )}
      </div>

      {/* 뒤로가기 */}
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
