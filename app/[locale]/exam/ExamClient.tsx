"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import { getExamQuestions } from "./data";
import { EXAM_VERSION } from "./data/config";
import { loadExamProgress, clearExamProgress, encodeAnswers, type ExamProgress } from "./useExamProgress";

type Lang = "ko" | "en";

// 메인 버튼 영역 공용 스타일 — 풀던 중/제출 완료/처음 상태가 같은 모양을 쓰도록 한 곳에서 관리
// 노란 주 버튼(풀러가기 / 이어서 풀기 / 내 결과 보기)
const PRIMARY_BUTTON_CLASS =
  "px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-base hover:brightness-110 active:scale-95 transition";
// 밑줄 텍스트 링크(처음부터 다시 풀기 / 챔피언 가이드로 돌아가기)
const TEXT_LINK_CLASS = "text-sm text-slate-400 hover:text-slate-200 underline underline-offset-2 transition";

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
    // 완료 상태의 handleRetake와 같은 동작: 기록을 지우고 바로 1번 문항부터 풀이 화면으로
    clearExamProgress();
    router.push(`/${locale}/exam/paper`);
  }

  function handleRetake() {
    const confirmed = window.confirm(
      lang === "ko"
        ? "이전 결과와 채점 기록이 사라져요. 다시 풀까요?"
        : "This clears your previous result and review record. Retake the exam?"
    );
    if (!confirmed) return;
    clearExamProgress();
    router.push(`/${locale}/exam/paper`);
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
              className={PRIMARY_BUTTON_CLASS}
            >
              {lang === "ko" ? "내 결과 보기" : "View My Result"}
            </a>
            <button onClick={handleRetake} className={TEXT_LINK_CLASS}>
              {lang === "ko" ? "처음부터 다시 풀기" : "Retake"}
            </button>
          </>
        ) : resumable ? (
          <>
            <a
              href={`/${locale}/exam/paper`}
              className={PRIMARY_BUTTON_CLASS}
            >
              {lang === "ko"
                ? `이어서 풀기 (${progress!.current + 1}/${total})`
                : `Resume (${progress!.current + 1}/${total})`}
            </a>
            <button
              onClick={handleRestart}
              className={TEXT_LINK_CLASS}
            >
              {lang === "ko" ? "처음부터 다시 풀기" : "Retake"}
            </button>
          </>
        ) : (
          <a
            href={`/${locale}/exam/paper`}
            className={PRIMARY_BUTTON_CLASS}
          >
            {lang === "ko" ? "풀러가기 →" : "Start Exam →"}
          </a>
        )}
      </div>

      {/* 뒤로가기 */}
      <div className="text-center">
        <a
          href={`/${locale}/champ`}
          className={TEXT_LINK_CLASS}
        >
          {lang === "ko" ? "← 챔피언 가이드로 돌아가기" : "← Back to Champion Guide"}
        </a>
      </div>
    </div>
  );
}
