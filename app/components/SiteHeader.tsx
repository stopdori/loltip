"use client";

import { useEffect, useRef, useState } from "react";
import NoticeButton from "./NoticeButton";
import HelpButton from "./HelpButton";
import TagGlossaryButton from "./TagGlossaryButton";

type Lang = "ko" | "en";

type Props = {
  lang: Lang;
  onLangChange: (v: Lang) => void;
  subtitle: string;
};

export default function SiteHeader({ lang, onLangChange, subtitle }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const btnBase = "px-3 py-2 rounded-xl text-sm font-bold border bg-slate-800/60 border-white/10 hover:bg-slate-800/80";
  const btnFull = `w-full ${btnBase} text-center`;

  return (
    <header className="max-w-6xl mx-auto px-4">
      <style>{`
        @keyframes quiz-shimmer {
          0%, 70%, 100% { color: inherit; border-color: rgba(255,255,255,0.1); box-shadow: none; }
          80% { color: #facc15; border-color: #facc15; box-shadow: 0 0 6px rgba(250,204,21,0.4); }
          90% { color: inherit; border-color: rgba(255,255,255,0.1); box-shadow: none; }
        }
        .quiz-shimmer { animation: quiz-shimmer 3s ease-in-out infinite; }
      `}</style>
      {/* 네비게이션 바 */}
      <div className="flex items-center justify-between gap-2">

        {/* 좌측: 모바일 햄버거 */}
        <div className="relative sm:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={btnBase}
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute left-0 top-full mt-1 z-50 flex flex-col gap-1 rounded-2xl bg-slate-900 ring-1 ring-white/10 shadow-xl p-2 min-w-[140px]">
              <NoticeButton lang={lang} className={`${btnFull} text-slate-200 hover:bg-slate-700/60`} />
              <HelpButton lang={lang} className={`${btnFull} text-slate-200 hover:bg-slate-700/60`} />
              <TagGlossaryButton lang={lang} className={btnFull} />
              <a href="/quiz" className={`${btnFull} quiz-shimmer`}>
                {lang === "ko" ? "퀴즈" : "Quiz"}
              </a>
            </div>
          )}
        </div>

        {/* 좌측: 데스크탑 버튼 나열 */}
        <div className="hidden sm:flex items-center gap-1">
          <NoticeButton lang={lang} />
          <HelpButton lang={lang} />
          <TagGlossaryButton lang={lang} />
          <a href="/quiz" className={`${btnBase} quiz-shimmer`}>
            {lang === "ko" ? "퀴즈" : "Quiz"}
          </a>
        </div>

        {/* 우측: 언어 선택 */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onLangChange("ko")}
            className={`px-3 py-2 rounded-xl text-sm font-bold border ${
              lang === "ko"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-slate-800/60 border-white/10"
            }`}
          >
            한글
          </button>
          <button
            onClick={() => onLangChange("en")}
            className={`px-3 py-2 rounded-xl text-sm font-bold border ${
              lang === "en"
                ? "bg-yellow-400 text-black border-yellow-300"
                : "bg-slate-800/60 border-white/10"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* 로고 */}
      <div className="mt-8 text-center">
        <h1
          onClick={() => { window.location.href = "/champ"; }}
          className="inline-block text-5xl font-extrabold text-yellow-400 hover:brightness-110 cursor-pointer"
        >
          LOLTIP
        </h1>
        <p className="mt-2 text-slate-300">{subtitle}</p>
        <p className="mt-1 text-xs text-slate-400">26.5 {lang === "ko" ? "패치 반영" : "patch"}</p>
      </div>
    </header>
  );
}
