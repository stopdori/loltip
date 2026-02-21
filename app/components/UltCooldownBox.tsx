"use client";

import { useEffect, useMemo, useState } from "react";

const HASTES = [0, 10, 20, 30, 40, 50, 60, 70, 80] as const;
const LEVELS = [6, 11, 16] as const;

type UltCooldownMap = Partial<Record<(typeof LEVELS)[number], number>>;

export default function UltCooldownBox({
  lang,
  ultCooldown,
  onCdChange,
  cdClassName = "text-emerald-300",
}: {
  lang: "ko" | "en";
  ultCooldown?: UltCooldownMap;
  onCdChange?: (cd: number | null) => void;
  cdClassName?: string;
}) {
  const [haste, setHaste] = useState<(typeof HASTES)[number]>(0);
  const [level, setLevel] = useState<(typeof LEVELS)[number]>(6);

  useEffect(() => {
    setHaste(0);
    setLevel(6);
  }, [ultCooldown]);

  const hasData = useMemo(() => {
    if (!ultCooldown) return false;
    return LEVELS.some((lv) => (ultCooldown?.[lv] ?? 0) > 0);
  }, [ultCooldown]);

  const base = hasData ? ultCooldown?.[level] ?? 0 : 0;

  const cd = useMemo(() => {
    if (!base) return null;
    return Math.round(base * (100 / (100 + haste)));
  }, [base, haste]);

  useEffect(() => {
    onCdChange?.(cd);
  }, [cd, onCdChange]);

  const disabledCls = !hasData
    ? "opacity-40 cursor-not-allowed pointer-events-none"
    : "";

  const hasteLabel = lang === "ko" ? "스킬가속" : "Ability Haste";
  const ultLabel = lang === "ko" ? "레벨" : "Ultimate";
  const lvSuffix = lang === "ko" ? "Lv" : "Lv";

  return (
    <div className="rounded-xl bg-slate-900/30 ring-1 ring-white/10 p-4 space-y-4 min-h-[96px]">
      {/* 스킬가속 */}
      <div className="flex items-start gap-0">
        <span className="text-sm font-semibold text-slate-200 shrink-0 w-[60px]">
          {hasteLabel}
        </span>

        <div className={`flex-1 ${disabledCls}`}>
          <div className="flex items-center gap-3">
            {/* ✅ 원래 높이(range 그대로) + 눈금만 겹치기 */}
            <div className="relative w-full">
  <input
    type="range"
    min={0}
    max={80}
    step={5}
    value={haste}
    onChange={(e) =>
      setHaste(Number(e.target.value) as (typeof HASTES)[number])
    }
    className="w-full accent-sky-400"
    disabled={!hasData}
  />

  {/* ✅ 눈금(20/40/60만) */}
  <div className="pointer-events-none absolute left-0 right-0 top-11/30 -translate-y-1/2 flex justify-between px-[2px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`h-2 w-[2px] rounded ${
          i === 0 || i === 4 ? "bg-transparent" : "bg-black"
        }`}
      />
    ))}
  </div>

  {/* ✅ 동그라미(숫자)만 오버레이 */}
  <div
    className="pointer-events-none absolute top-2/5 -translate-y-1/2"
    style={{ left: `${(haste / 80) * 100}%` }}
  >
    <div className="w-6 h-6 -translate-x-1/2 rounded-full bg-slate-900 ring-2 ring-sky-400 flex items-center justify-center text-[11px] font-black text-sky-300">
      {haste}
    </div>
  </div>
</div>


          
          </div>
        </div>
      </div>

      {/* 궁 레벨 + 쿨타임 */}
      <div className="flex items-start gap-0">
        <span className="text-sm font-semibold text-slate-200 shrink-0 w-[60px]">
          {ultLabel}
        </span>

        <div className="flex-1 flex items-center justify-between gap-3">
          <div className={`w-1/2 ${disabledCls}`}>
  <div className="relative w-full">
    <input
      type="range"
      min={0}
      max={2}
      step={1}
      value={level === 6 ? 0 : level === 11 ? 1 : 2}
      onChange={(e) => {
        const idx = Number(e.target.value) as 0 | 1 | 2;
        setLevel(LEVELS[idx]);
      }}
      className="w-full accent-yellow-300"
      disabled={!hasData}
    />

    {/* ✅ 눈금: 가운데(11)만 */}
    <div className="pointer-events-none absolute left-1 right-0 top-11/30 -translate-y-1/2 flex justify-center">
      <span className="h-2 w-[2px] rounded bg-black" />
    </div>

    {/* ✅ 동그라미(숫자) */}
<div
  className="pointer-events-none absolute top-11/30 -translate-y-1/2"
  style={{
  left: `${((level === 6 ? 0 : level === 11 ? 1 : 2) / 2) * 100}%`,
}}

>

      <div className="w-6 h-6 -translate-x-1/2 rounded-full bg-slate-900 ring-2 ring-yellow-300 flex items-center justify-center text-[11px] font-black text-yellow-200">
        {level}
      </div>
    </div>
  </div>
</div>


          <span className="shrink-0 text-sm font-extrabold">
            {!hasData || !base ? (
              <span className="text-slate-400">--s</span>
            ) : haste === 0 ? (
              <span className={`${cdClassName} text-[17px] font-black`}>{cd}s</span>
            ) : (
              <>
                <span className="text-slate-100 text-[12px] font-semibold">
                  {base}s
                </span>
                <span className="mx-1 text-slate-100">→</span>
                <span className={`${cdClassName} text-[17px] font-black`}>{cd}s</span>

              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
