"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  lang: "ko" | "en";
  className?: string;
  onOpenChange?: (v: boolean) => void;
};

export default function HelpButton({ lang, className, onOpenChange }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = (v: boolean) => {
    setOpen(v);
    onOpenChange?.(v);
  };

  const t = useMemo(() => {
    return lang === "ko"
      ? {
          title: "사용 방법",
          close: "닫기",
          hint: "",
          hide: "오늘 하루 그만보기",
        }
      : {
          title: "How to use",
          close: "Close",
          hint: "ESC / click outside to close",
          hide: "Don't show again today",
        };
  }, [lang]);

 
  /* 🔹 ESC 닫기 */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ? 버튼 (수동 오픈은 항상 가능) */}
      <button
        type="button"
        onClick={() => handleOpen(true)}
        className={
          className ??
"px-3 py-2 rounded-xl text-sm font-bold border bg-slate-800/60 border-white/10 hover:bg-slate-700/60"

        }
        aria-label={t.title}
        title={t.title}
      >
        {lang === "ko" ? "사용법" : "Help"}
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => handleOpen(false)}
          />

          <div className="absolute left-1/2 top-1/2 w-[min(520px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-700 shadow-xl">
            {/* 헤더 */}
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-100">
                {t.title}
              </h3>

              <button
                type="button"
                onClick={() => handleOpen(false)}
                className="rounded-lg px-2 py-1 text-sm text-slate-200 hover:bg-slate-800"
              >
                {t.close}
              </button>
            </div>

            {/* 이미지 */}
            <Image
  src={lang === "ko" ? "/help/tutorial_ko.webp" : "/help/tutorial_en.webp"}
  alt={lang === "ko" ? "LOLTIP 사용 방법" : "LOLTIP tutorial"}
  width={520}
  height={300}
  className="mb-4 w-full rounded-xl ring-1 ring-white/10"
/>

            <div className="text-xs text-slate-400 mb-4">{t.hint}</div>

            {/* ✅ 하단 버튼 영역 (가운데 정렬) */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => handleOpen(false)}
                className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-slate-700"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
