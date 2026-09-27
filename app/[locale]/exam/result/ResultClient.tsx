"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SiteHeader from "@/app/components/SiteHeader";
import { getExamQuestions } from "../data";
import { DIFFICULTY_POINTS, EXAM_VERSION } from "../data/config";
import tiers from "../data/tiers";
import { loadExamProgress, saveExamProgress, encodeAnswers, type ExamProgress } from "../useExamProgress";

type Lang = "ko" | "en";

const TIER_COLORS: Record<string, string> = {
  iron:        "text-slate-400",
  bronze:      "text-amber-700",
  silver:      "text-slate-300",
  gold:        "text-yellow-400",
  platinum:    "text-teal-400",
  emerald:     "text-emerald-400",
  diamond:     "text-blue-400",
  master:      "text-purple-400",
  grandmaster: "text-red-400",
  challenger:  "text-cyan-300",
};

const MASTER_INDEX = tiers.findIndex((t) => t.tier === "master");

// 결과 연출의 모든 시간 값에 곱하는 배율 (클수록 느려짐). 4/3 = 기본 속도의 75%.
const REVEAL_TIME_SCALE = 4 / 3;
const revealMs = (ms: number) => Math.round(ms * REVEAL_TIME_SCALE);

type Session = {
  progress: ExamProgress | null;
  isOwner: boolean;
  // 이 방문 시점에 처음으로 공개되는 결과인지 — 연출 재생 대상 여부를 이후에도 고정해서 판단하기 위해 로드 시점 값을 그대로 들고 있는다.
  freshReveal: boolean;
};

export default function ResultClient() {
  const locale = useLocale();
  const lang = locale as Lang;
  const subtitle = lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge";

  return (
    <Suspense
      fallback={
        <div className="space-y-10">
          <SiteHeader subtitle={subtitle} />
          <p className="text-center text-slate-400 text-sm">{lang === "ko" ? "불러오는 중..." : "Loading..."}</p>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}

function ResultContent() {
  const locale = useLocale();
  const lang = locale as Lang;
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const questions = useMemo(() => getExamQuestions(), []);

  const rawVersion = searchParams.get("v");
  const versionMismatch = rawVersion !== String(EXAM_VERSION);

  const rawAnswers = searchParams.get("a") ?? "";
  const userAnswers = rawAnswers.split("").map((c) => (c === "x" ? -1 : Number(c)));

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const saved = loadExamProgress(questions.length);
    const isOwner = !!saved && saved.completed && encodeAnswers(saved.answers) === rawAnswers;
    setSession({
      progress: saved,
      isOwner,
      freshReveal: isOwner && !!saved && !saved.revealed,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions.length, rawAnswers]);

  const { score, totalPoints } = useMemo(() => {
    let earned = 0;
    let total = 0;
    questions.forEach((q, i) => {
      const point = DIFFICULTY_POINTS[q.difficulty];
      total += point;
      if (userAnswers[i] === q.answer) earned += point;
    });
    return { score: earned, totalPoints: total };
  }, [questions, userAnswers]);

  const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

  const finalTier = useMemo(() => {
    const sorted = [...tiers].sort((a, b) => b.min - a.min);
    return sorted.find((t) => percentage >= t.min) ?? tiers[0];
  }, [percentage]);

  const finalIndex = tiers.findIndex((t) => t.tier === finalTier.tier);

  const [phase, setPhase] = useState<"grading" | "climbing" | "done">("done");
  const [tierIndex, setTierIndex] = useState(finalIndex);
  const [displayScore, setDisplayScore] = useState(score);

  // 세션이 확정되면, 이번 방문에서 연출을 재생할지 결정한다 (본인 + 아직 안 본 결과일 때만, 1회).
  useEffect(() => {
    if (!session) return;
    if (session.freshReveal) {
      setPhase("grading");
      setTierIndex(0);
      setDisplayScore(0);
    } else {
      setPhase("done");
      setTierIndex(finalIndex);
      setDisplayScore(score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // "채점 중..." 표시 후 상승 연출 시작
  useEffect(() => {
    if (phase !== "grading") return;
    const t = setTimeout(() => setPhase("climbing"), revealMs(1500));
    return () => clearTimeout(t);
  }, [phase]);

  // 티어를 한 단계씩 올린다 (마스터 이상은 느리게)
  useEffect(() => {
    if (phase !== "climbing") return;
    if (tierIndex >= finalIndex) {
      setPhase("done");
      return;
    }
    const enteringSlowZone = tierIndex + 1 >= MASTER_INDEX;
    const delay = revealMs(enteringSlowZone ? 650 : 220);
    const t = setTimeout(() => setTierIndex((i) => Math.min(i + 1, finalIndex)), delay);
    return () => clearTimeout(t);
  }, [phase, tierIndex, finalIndex]);

  // 점수 카운트업
  useEffect(() => {
    if (phase !== "climbing") return;
    const steps = 20;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayScore(Math.round((score * i) / steps));
      if (i >= steps) clearInterval(interval);
    }, revealMs(90));
    return () => clearInterval(interval);
  }, [phase, score]);

  // 연출이 끝나면(스킵 포함) revealed를 저장
  useEffect(() => {
    if (phase !== "done" || !session?.isOwner || !session.progress || session.progress.revealed) return;
    saveExamProgress({ ...session.progress, revealed: true });
  }, [phase, session]);

  function handleSkip() {
    setTierIndex(finalIndex);
    setDisplayScore(score);
    setPhase("done");
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const subtitle = lang === "ko" ? "챔피언 상호작용 지식을 테스트해보세요" : "Test your champion interaction knowledge";

  if (!session) {
    return (
      <div className="space-y-10">
        <SiteHeader subtitle={subtitle} />
        <p className="text-center text-slate-400 text-sm">{lang === "ko" ? "불러오는 중..." : "Loading..."}</p>
      </div>
    );
  }

  const displayedTier = tiers[tierIndex];
  const displayedPercentage = totalPoints > 0 ? Math.round((displayScore / totalPoints) * 100) : 0;
  const showPop = session.freshReveal && phase === "done";

  return (
    <div className="space-y-10">
      <style>{`
        @keyframes examTierPop {
          0% { transform: scale(0.85); filter: drop-shadow(0 0 0 rgba(250,204,21,0)); }
          60% { transform: scale(1.15); filter: drop-shadow(0 0 18px rgba(250,204,21,0.85)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(250,204,21,0.5)); }
        }
        .exam-tier-pop { animation: examTierPop ${revealMs(700)}ms ease-out; }
      `}</style>

      <SiteHeader subtitle={subtitle} />

      {/* 이 화면엔 보이는 제목 자리가 없어 시각 변화 없는 sr-only h1을 둔다(로고가 h1에서 내려와 h1이 0개가 되는 것 방지) */}
      <h1 className="sr-only">{lang === "ko" ? "롤 능력고사 결과" : "LoL Matchup Exam Result"}</h1>

      {versionMismatch && (
        <p className="max-w-md mx-auto text-center text-xs text-amber-400/90 bg-amber-400/10 ring-1 ring-amber-400/30 rounded-lg px-3 py-2">
          {lang === "ko"
            ? "⚠ 이전 버전의 결과예요. 문항 구성이 지금과 다를 수 있어요."
            : "⚠ This is a result from an older exam version — questions may differ from the current set."}
        </p>
      )}

      {/* 결과 카드 */}
      <div className="max-w-md mx-auto space-y-6">
        <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 p-8 text-center space-y-4">
          {phase === "grading" ? (
            <p className="text-slate-300 text-base animate-pulse py-10">
              {lang === "ko" ? "채점 중..." : "Grading..."}
            </p>
          ) : (
            <>
              {/* 티어 엠블럼 */}
              <div className={`relative w-full h-40 ${showPop ? "exam-tier-pop" : ""}`}>
                <Image
                  src={`/tiers/${displayedTier.tier}.webp`}
                  alt={displayedTier.label[lang]}
                  fill
                  sizes="256px"
                  className="object-contain"
                />
              </div>

              {/* 티어 */}
              <p className={`text-lg font-extrabold ${TIER_COLORS[displayedTier.tier]}`}>
                {displayedTier.label[lang]}
              </p>

              {/* 점수 */}
              <p className="text-slate-300 text-lg">
                <span className="text-yellow-400 font-bold text-2xl">{displayScore}</span>
                <span className="text-slate-500 text-base"> / {totalPoints}</span>
                {lang === "ko" ? "점" : " pts"}
              </p>

              {/* 점수 바 */}
              <div className="w-full h-2 rounded-full bg-slate-700">
                <div
                  className="h-2 rounded-full bg-yellow-400 transition-all"
                  style={{ width: `${displayedPercentage}%` }}
                />
              </div>
              <p className="text-slate-500 text-xs">{displayedPercentage}%</p>

              {/* 문항 수 */}
              <p className="text-slate-500 text-sm">
                {lang === "ko"
                  ? `${questions.length}문항 중 ${userAnswers.filter((a, i) => a === questions[i]?.answer).length}개 정답`
                  : `${userAnswers.filter((a, i) => a === questions[i]?.answer).length} / ${questions.length} correct`}
              </p>

              {phase === "climbing" && (
                <button
                  onClick={handleSkip}
                  className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-2 transition"
                >
                  {lang === "ko" ? "건너뛰기" : "Skip"}
                </button>
              )}
            </>
          )}
        </div>

        {/* 버튼 */}
        {phase === "done" && (
          session.isOwner ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShare}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold hover:bg-slate-600 active:scale-95 transition"
              >
                {copied
                  ? lang === "ko" ? "복사됨!" : "Copied!"
                  : lang === "ko" ? "공유하기" : "Share"}
              </button>

              <a
                href={`/${locale}/exam`}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-700 ring-1 ring-white/10 text-slate-200 text-sm font-semibold text-center hover:bg-slate-600 active:scale-95 transition"
              >
                {lang === "ko" ? "다시 풀기" : "Retry"}
              </a>

              <a
                href={`/${locale}/exam/review`}
                className="flex-1 px-4 py-2.5 rounded-xl bg-yellow-400 text-black text-sm font-bold text-center hover:brightness-110 active:scale-95 transition"
              >
                {lang === "ko" ? "채점 보기" : "Review"}
              </a>
            </div>
          ) : (
            <a
              href={`/${locale}/exam`}
              className="block px-8 py-3.5 rounded-xl bg-yellow-400 text-black font-bold text-base text-center hover:brightness-110 active:scale-95 transition"
            >
              {lang === "ko" ? "나도 도전하기 →" : "Take the exam →"}
            </a>
          )
        )}
      </div>
    </div>
  );
}
