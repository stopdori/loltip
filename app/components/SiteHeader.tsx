"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter, Link } from "@/i18n/navigation";
import NoticeButton from "./NoticeButton";

type Lang = "ko" | "en";

type Props = {
  subtitle: string;
  champSearchOpen?: boolean;
  noticeOpen?: boolean;
  onNoticeOpenChange?: (v: boolean) => void;
};

// 언어 전환 버튼 스타일/마크업 (실제 <a href>로 렌더링 — 크롤러가 ko/en 상호 발견 가능)
// query가 없으면(Suspense fallback) 쿼리 없이, 있으면 현재 쿼리스트링을 유지한 채로 이동.
function LangButtons({ lang, pathname, query }: { lang: Lang; pathname: string; query?: Record<string, string> }) {
  const href = query && Object.keys(query).length > 0 ? { pathname, query } : pathname;
  return (
    <>
      <Link
        href={href}
        locale="ko"
        replace
        className={`px-2 py-2 rounded-xl text-sm font-bold border ${
          lang === "ko"
            ? "bg-sky-500 text-black border-sky-400"
            : "bg-slate-800/60 border-white/10 hover:bg-slate-800/80"
        }`}
      >
        KO
      </Link>
      <Link
        href={href}
        locale="en"
        replace
        className={`px-2 py-2 rounded-xl text-sm font-bold border ${
          lang === "en"
            ? "bg-sky-500 text-black border-sky-400"
            : "bg-slate-800/60 border-white/10 hover:bg-slate-800/80"
        }`}
      >
        EN
      </Link>
    </>
  );
}

// useSearchParams()는 정적 생성 페이지에서 Suspense 경계 없이 쓰면 빌드가 깨지므로
// 쿼리를 읽는 부분만 이 서브컴포넌트로 분리해 아래에서 <Suspense>로 감싼다.
function LangButtonsWithQuery({ lang, pathname }: { lang: Lang; pathname: string }) {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  return <LangButtons lang={lang} pathname={pathname} query={query} />;
}

export default function SiteHeader({ subtitle, champSearchOpen, onNoticeOpenChange }: Props) {
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
  const btnIcon = "w-8 h-8 flex items-center justify-center rounded-xl text-xs font-extrabold text-yellow-400 bg-slate-800/60 ring-1 ring-white/10 hover:bg-slate-800/80";

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
              <button
                onClick={() => router.push(`/champ`)}
                aria-label={lang === "ko" ? "홈으로 이동" : "Go to home"}
                className={btnIcon}
              >
                LT
              </button>
              <NoticeButton lang={lang} className={`${btnFull} text-slate-200 hover:bg-slate-700/60`} hidden={!!champSearchOpen} onOpenChange={onNoticeOpenChange} />
              <a href={`/${locale}/tags`} className={btnFull}>
                {lang === "ko" ? "태그" : "Tags"}
              </a>
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
          <button
            onClick={() => router.push(`/champ`)}
            aria-label={lang === "ko" ? "홈으로 이동" : "Go to home"}
            className={btnIcon}
          >
            LT
          </button>
          <NoticeButton lang={lang} hidden={!!champSearchOpen} onOpenChange={onNoticeOpenChange} />
          <a href={`/${locale}/tags`} className={btnBase}>
            {lang === "ko" ? "태그" : "Tags"}
          </a>
          <a href={`/${locale}/quiz`} className={`${btnBase} quiz-shimmer`}>
            {lang === "ko" ? "퀴즈" : "Quiz"}
          </a>
        </div>

        {/* 우측: 언어 선택 (실제 <a href> — 크롤 가능, 쿼리스트링 유지) */}
        <div className="flex items-center gap-1">
          <Suspense fallback={<LangButtons lang={lang} pathname={pathname} />}>
            <LangButtonsWithQuery lang={lang} pathname={pathname} />
          </Suspense>
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
        <p className="mt-1 text-xs text-slate-400">26.17 {lang === "ko" ? "패치 반영" : "patch"}</p>
      </div>
    </header>
  );
}
