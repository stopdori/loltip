"use client";

import { useLocale } from "next-intl";
import SiteHeader from "@/app/components/SiteHeader";
import questions from "./data/questions";

type Lang = "ko" | "en";

export default function ExamClient() {
  const locale = useLocale();
  const lang = locale as Lang;

  const title = lang === "ko" ? "롤 능력고사" : "LoL Matchup Exam";
  const subtitle =
    lang === "ko"
      ? "챔피언 상호작용 지식을 테스트해보세요"
      : "Test your champion interaction knowledge";

  return (
    <div className="space-y-10">
      <SiteHeader subtitle={subtitle} />

      {/* 제목 */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
        <p className="text-slate-400 text-sm">
          {lang === "ko"
            ? `총 ${questions.length > 0 ? questions.length : "?"}문항 · 100점 만점`
            : `${questions.length > 0 ? questions.length : "?"} questions · 100 points total`}
        </p>
      </div>

      {/* 풀러가기 버튼 */}
      <div className="flex justify-center">
        <a
          href={`/${locale}/exam/quiz`}
          className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold text-base hover:brightness-110 active:scale-95 transition"
        >
          {lang === "ko" ? "풀러가기 →" : "Start Exam →"}
        </a>
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
