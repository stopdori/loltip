"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  lang: "ko" | "en";
  className?: string;
  hidden?: boolean;
  onOpenChange?: (v: boolean) => void;
};

const NOTICE = {
  ko: ["상호작용 상시 업데이트 중", "데이터 오류 발견 시 문의 바람", "대 AI 시대를 맞이해 잘못된 정보가 범람하고 있지만, 인간이 하나하나 실험해서 팩트만 정리해서 기록했습니다."],
  en: ["Interaction updates in progress", "Please contact us if you find any data errors", "In an era of AI where misinformation is everywhere, every piece of information here has been personally tested and verified by humans — facts only."],
};

export default function NoticeButton({ lang, className, hidden, onOpenChange }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = (v: boolean) => {
    setOpen(v);
    onOpenChange?.(v);
  };
  const rootRef = useRef<HTMLSpanElement | null>(null);

  const t = useMemo(() => {
    return lang === "ko"
      ? { label: "공지사항", title: "공지사항" }
      : { label: "Notice", title: "Notices" };
  }, [lang]);

  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // 바깥 클릭 닫기
  useEffect(() => {
    if (!open) return;

    const onDown = (e: MouseEvent | TouchEvent) => {
      const el = rootRef.current;
      if (!el) return;

      const target = e.target as Node | null;
      if (!target) return;

      // 버튼/팝업 내부 클릭이면 유지
      if (el.contains(target)) return;

      handleOpen(false);
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("touchstart", onDown);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  if (hidden) return null;

  return (
    <span ref={rootRef} className="relative inline-flex">
      {/* 버튼 */}
      <button
  type="button"
  onClick={() => handleOpen(!open)}
  className={
    className ??
    "px-3 py-2 rounded-xl text-sm font-bold border bg-slate-800/60 text-slate-200 border-white/10 hover:bg-slate-700/60"
  }
  aria-label={t.title}
  title={t.title}
>
  {t.label}
</button>


      {/* 작은 모달(팝오버) */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-[min(320px,78vw)] rounded-2xl bg-slate-900/95 p-4 ring-1 ring-slate-700 shadow-xl z-50">
          {/* ✅ 제목 가운데 (닫기 버튼 없음) */}
          <div className="mb-3 text-center">
            <div className="text-sm font-extrabold text-slate-100">
              {t.title}
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-200">
            {(NOTICE[lang] ?? []).map((line, idx) => (
              <li key={idx} className="whitespace-pre-line">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}
