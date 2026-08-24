"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import NoticeButton from "./NoticeButton";
import HelpButton from "./HelpButton";
import TagGlossaryButton from "./TagGlossaryButton";

type Lang = "ko" | "en";

type Props = {
  subtitle: string;
  champSearchOpen?: boolean;
  helpOpen?: boolean;
  onHelpOpenChange?: (v: boolean) => void;
  noticeOpen?: boolean;
  onNoticeOpenChange?: (v: boolean) => void;
  onGlossaryOpenChange?: (v: boolean) => void;
};

export default function SiteHeader({ subtitle, champSearchOpen, helpOpen = false, onHelpOpenChange, onNoticeOpenChange, onGlossaryOpenChange }: Props) {
  const locale = useLocale();
  const lang = locale as Lang;
  const router = useRouter();
  const pathname = usePathname();
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
      <div className="relative flex items-center justify-between gap-2">

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
              <NoticeButton lang={lang} className={`${btnFull} text-slate-200 hover:bg-slate-700/60`} hidden={!!champSearchOpen || helpOpen} onOpenChange={onNoticeOpenChange} />
              <HelpButton lang={lang} className={`${btnFull} text-slate-200 hover:bg-slate-700/60`} onOpenChange={onHelpOpenChange} />
              <TagGlossaryButton lang={lang} className={btnFull} onOpenChange={onGlossaryOpenChange} />
              <a href={`/${locale}/quiz`} className={`${btnFull} quiz-shimmer`}>
                {lang === "ko" ? "퀴즈" : "Quiz"}
              </a>
            </div>
          )}
        </div>

        {/* 중앙: 모바일 로고 */}
        <h1
          onClick={() => router.push(`/champ`)}
          className="sm:hidden absolute left-1/2 -translate-x-1/2 text-3xl font-extrabold text-yellow-400 hover:brightness-110 cursor-pointer"
        >
          LOLTIP
        </h1>

        {/* 좌측: 데스크탑 버튼 나열 */}
        <div className="hidden sm:flex items-center gap-1">
          <NoticeButton lang={lang} hidden={!!champSearchOpen} onOpenChange={onNoticeOpenChange} />
          <HelpButton lang={lang} />
          <TagGlossaryButton lang={lang} onOpenChange={onGlossaryOpenChange} />
          <a href={`/${locale}/quiz`} className={`${btnBase} quiz-shimmer`}>
            {lang === "ko" ? "퀴즈" : "Quiz"}
          </a>
        </div>

        {/* 우측: 언어 선택 */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => router.replace(pathname, { locale: "ko" })}
            className={`px-2 py-2 rounded-xl text-sm font-bold border ${
              lang === "ko"
                ? "bg-sky-500 text-black border-sky-400"
                : "bg-slate-800/60 border-white/10 hover:bg-slate-800/80"
            }`}
          >
            KO
          </button>
          <button
            onClick={() => router.replace(pathname, { locale: "en" })}
            className={`px-2 py-2 rounded-xl text-sm font-bold border ${
              lang === "en"
                ? "bg-sky-500 text-black border-sky-400"
                : "bg-slate-800/60 border-white/10 hover:bg-slate-800/80"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* 로고 (데스크탑) */}
      <div className="hidden sm:block mt-8 text-center">
        <h1
          onClick={() => router.push(`/champ`)}
          className="inline-block text-5xl font-extrabold text-yellow-400 hover:brightness-110 cursor-pointer"
        >
          LOLTIP
        </h1>
        <p className="mt-2 text-slate-300 hidden md:block">{subtitle}</p>
        <p className="mt-1 text-xs text-slate-400">26.16 {lang === "ko" ? "패치 반영" : "patch"}</p>
      </div>
    </header>
  );
}
