"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  lang: "ko" | "en";
  className?: string;
  onOpenChange?: (v: boolean) => void;
};

type Overlay = { top: string; left: string; width: string; height: string; ring?: string };

const SLIDES: { ko: string; en: string; img: string; overlays: Overlay[] }[] = [
  {
    ko: "1. 비교할 챔피언 2개를 선택하세요.",
    en: "1. Select two champions to compare.",
    img: "/help/en_mobile/step1_mobile_en.webp",
    overlays: [
      { top: "38%", left: "8%",  width: "40%", height: "45%", ring: "ring-green-400" },
      { top: "38%", left: "54%", width: "40%", height: "45%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "2. 챔피언 탭을 선택해 정보를 확인하세요.",
    en: "2. Select a champion tab to view their info.",
    img: "/help/en_mobile/step2_mobile_en.webp",
    overlays: [
      { top: "18%", left: "5%",  width: "45%", height: "15%", ring: "ring-green-400" },
      { top: "18%", left: "55%", width: "45%", height: "15%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "3. 각 챔피언의 스킬 태그를 확인하세요.",
    en: "3. Check each champion's skill tags.",
    img: "/help/en_mobile/step3_mobile_en.webp",
    overlays: [
      { top: "5%", left: "3%", width: "94%", height: "25%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "4. 챔피언 요약과 팁을 읽어보세요.",
    en: "4. Read the champion summary and tips.",
    img: "/help/en_mobile/step4_mobile_en.webp",
    overlays: [],
  },
  {
    ko: "5. 두 챔피언 간 특수한 상호작용을 확인하세요.",
    en: "5. Check special interactions between the two champions.",
    img: "/help/en_mobile/step5_mobile_en.webp",
    overlays: [],
  },
];

export default function HelpButton({ lang, className, onOpenChange }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = (v: boolean) => {
    setOpen(v);
    onOpenChange?.(v);
    if (v) setStep(0);
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const t = useMemo(() => {
    return lang === "ko"
      ? { title: "사용 방법", close: "닫기", hint: "" }
      : { title: "How to use", close: "Close", hint: "ESC / click outside to close" };
  }, [lang]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleOpen(false);
      if (e.key === "ArrowRight") setStep((s) => Math.min(s + 1, SLIDES.length - 1));
      if (e.key === "ArrowLeft") setStep((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const slide = SLIDES[step];
  const imgSrc = slide.img;

  return (
    <>
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
          <style>{`
            @keyframes blink-overlay {
              0% { opacity: 0; }
              20% { opacity: 1; }
              67% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}</style>
          <div className="absolute inset-0 bg-black/60" onClick={() => handleOpen(false)} />

          <div className="absolute left-1/2 top-1/2 w-[min(1000px,96vw)] max-h-[700px] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-700 shadow-xl">
            {/* 헤더 */}
            <div className="mb-3 text-center">
              <h3 className="text-base font-semibold text-slate-100">{t.title}</h3>
            </div>

            {/* 멘트 */}
            <p className="mb-3 text-sm text-slate-200">{lang === "ko" ? slide.ko : slide.en}</p>

            {/* 이미지 + 오버레이 */}
            <div className="relative mb-4 sm:hidden">
              <Image
                src={imgSrc}
                alt={`step ${step + 1}`}
                width={520}
                height={400}
                className="w-full rounded-xl ring-1 ring-white/10 object-contain"
                unoptimized
              />
              {slide.overlays.map((o, i) => (
                <div
                  key={i}
                  className={`absolute rounded-xl ring-4 pointer-events-none ${o.ring ?? "ring-yellow-400"}`}
                  style={{ top: o.top, left: o.left, width: o.width, height: o.height, animation: "blink-overlay 1.5s ease-in-out infinite" }}
                />
              ))}
            </div>

            {/* 좌우 화살표 + 점 */}
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(s - 1, 0))}
                disabled={step === 0}
                className="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ◀
              </button>

              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setStep(i)}
                    className={`w-2.5 h-2.5 rounded-full transition ${i === step ? "bg-yellow-400" : "bg-slate-600 hover:bg-slate-500"}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep((s) => Math.min(s + 1, SLIDES.length - 1))}
                disabled={step === SLIDES.length - 1}
                className="px-3 py-1.5 rounded-lg text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ▶
              </button>
            </div>


            {/* 하단 닫기 버튼 */}
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
