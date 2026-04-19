"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  lang: "ko" | "en";
  className?: string;
  onOpenChange?: (v: boolean) => void;
};

type Overlay = { top: string; left: string; width: string; height: string; ring?: string };
type Slide = { ko: string; en: string; ko_img: string; en_img: string; overlays: Overlay[] };

const MOBILE_SLIDES: Slide[] = [
  {
    ko: "1. 비교할 챔피언 2개를 선택하세요.",
    en: "1. Select two champions to compare.",
    ko_img: "/help/ko_mobile/step1_mobile_ko.webp",
    en_img: "/help/en_mobile/step1_mobile_en.webp",
    overlays: [
      { top: "37%", left: "11%",  width: "32%", height: "39%", ring: "ring-green-400" },
      { top: "37%", left: "57%", width: "31%", height: "39%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "2. 챔피언 탭을 선택해 정보를 확인하세요.",
    en: "2. Select a champion tab to view their info.",
    ko_img: "/help/ko_mobile/step2_mobile_ko.webp",
    en_img: "/help/en_mobile/step2_mobile_en.webp",
    overlays: [
      { top: "9%", left: "9%",  width: "40%", height: "12%", ring: "ring-green-400" },
      { top: "9%", left: "51%", width: "40%", height: "12%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "3. 각 챔피언의 스킬 태그를 확인하세요.",
    en: "3. Check each champion's skill tags.",
    ko_img: "/help/ko_mobile/step3_mobile_ko.webp",
    en_img: "/help/en_mobile/step3_mobile_en.webp",
    overlays: [
      { top: "5%", left: "8%", width: "84%", height: "25%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "4. 챔피언 요약과 팁을 읽어보세요.",
    en: "4. Read the champion summary and tips.",
    ko_img: "/help/ko_mobile/step4_mobile_ko.webp",
    en_img: "/help/en_mobile/step4_mobile_en.webp",
    overlays: [],
  },
  {
    ko: "5. 두 챔피언의 특수한 상호작용을 확인하세요.",
    en: "5. Check special interactions between the two champions.",
    ko_img: "/help/ko_mobile/step5_mobile_ko.webp",
    en_img: "/help/en_mobile/step5_mobile_en.webp",
    overlays: [],
  },
];

const PC_SLIDES: Slide[] = [
  {
    ko: "1. 비교할 챔피언 2개를 선택하세요.",
    en: "1. Select two champions to compare.",
    ko_img: "/help/ko_pc/step1_pc_ko.webp",
    en_img: "/help/en_pc/step1_pc_en.webp",
    overlays: [
      { top: "16%", left: "22%", width: "23%", height: "30%", ring: "ring-green-400" },
      { top: "16%", left: "55%", width: "23%", height: "30%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "2. 각 챔피언의 기본 정보와 스킬 태그를 확인하세요.",
    en: "2. Check each champion's basic info and skill tags.",
    ko_img: "/help/ko_pc/step2_pc_ko.webp",
    en_img: "/help/en_pc/step2_pc_en.webp",
    overlays: [
      { top: "2%", left: "2%", width: "43%", height: "75%", ring: "ring-green-400" },
      { top: "2%", left: "55%", width: "43%", height: "75%", ring: "ring-green-400" },
    ],
  },
  {
    ko: "3. 두 챔피언 간 특수한 상호작용을 확인하세요.",
    en: "3. Check special interactions between the two champions.",
    ko_img: "/help/ko_pc/step3_pc_ko.webp",
    en_img: "/help/en_pc/step3_pc_en.webp",
    overlays: [
      { top: "36%", left: "3%", width: "94%", height: "23%", ring: "ring-green-400" },
    ],
  },
];

export default function HelpButton({ lang, className, onOpenChange }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = isMobile ? MOBILE_SLIDES : PC_SLIDES;

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
      if (e.key === "ArrowRight") setStep((s) => Math.min(s + 1, slides.length - 1));
      if (e.key === "ArrowLeft") setStep((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, slides]);

  const slide = slides[step];
  const imgSrc = lang === "ko" ? slide.ko_img : slide.en_img;

  return (
    <>
      <button
        type="button"
        onClick={() => handleOpen(true)}
        className={
          className ??
          "px-3 py-2 rounded-xl text-sm font-bold border bg-slate-800/60 border-white/10 hover:bg-slate-700/60 quiz-shimmer"
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

          <div className="absolute left-1/2 top-1/2 w-[min(1000px,96vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-700 shadow-xl">
            {/* 멘트 */}
            <div className="mb-3 text-center">
              <p className="text-base font-bold text-white">{lang === "ko" ? slide.ko : slide.en}</p>
            </div>

            {/* 이미지 + 오버레이 + 화살표 */}
            <div className="relative mb-4">
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
                  key={`${step}-${i}`}
                  className={`absolute rounded-xl ring-4 pointer-events-none ${o.ring ?? "ring-yellow-400"}`}
                  style={{ top: o.top, left: o.left, width: o.width, height: o.height, animation: "blink-overlay 1.2s ease-in-out infinite", animationDelay: `-${(Date.now() % 1200) / 1000}s` }}
                />
              ))}
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(s - 1, 0))}
                disabled={step === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-bold text-slate-200 bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(s + 1, slides.length - 1))}
                disabled={step === slides.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-bold text-slate-200 bg-yellow-400 text-black hover:bg-yellow-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ▶
              </button>
            </div>

            {/* 점 인디케이터 */}
            <div className="flex justify-center gap-2 mb-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStep(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${i === step ? "bg-yellow-400" : "bg-slate-600 hover:bg-slate-500"}`}
                />
              ))}
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
