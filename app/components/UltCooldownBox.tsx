"use client";

import { useEffect, useMemo, useState } from "react";

const HASTES = [0, 10, 20, 30, 40, 50, 60, 70, 80] as const;
const LEVELS = [6, 11, 16] as const;

type UltCooldownMap = Partial<Record<(typeof LEVELS)[number], number>>;

export default function UltCooldownBox({
  ultCooldown,
  onCdChange,
  cdClassName = "text-emerald-300",
}: {
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

  return (
    <div className="rounded-xl bg-slate-900/30 ring-1 ring-white/10 p-4 space-y-4 min-h-[96px]">
      {/* 스킬가속 */}
      <div className="flex items-start gap-3">
        <span className="text-sm font-semibold text-slate-200 shrink-0 w-[60px]">
          스킬가속
        </span>

        <div className="flex flex-wrap items-center gap-1.5">
          {HASTES.map((v) => {
            const selected = haste === v;

            return (
              <button
                key={v}
                type="button"
                disabled={!hasData}
                onClick={() => {
                  if (!hasData) return;
                  setHaste(v);
                }}
                className={`rounded-lg px-1 py-0.5 text-[13px] sm:text-[10px] font-semibold ring-1 transition active:scale-[0.98]
                  ${disabledCls}
                  ${
                    selected
                      ? "bg-slate-200/10 text-slate-100 ring-white/20"
                      : "bg-slate-800/40 text-slate-300 ring-white/10 hover:bg-slate-700/40"
                  }`}
              >
                {v}
              </button>
            );
          })}
        </div>
      </div>

      {/* 궁 레벨 + 쿨타임 */}
      <div className="flex items-start gap-3">
        <span className="text-sm font-semibold text-slate-200 shrink-0 w-[60px]">
          궁극기
        </span>

        <div className="flex-1 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {LEVELS.map((lv) => {
              const selected = level === lv;

              return (
                <button
                  key={lv}
                  type="button"
                  disabled={!hasData}
                  onClick={() => {
                    if (!hasData) return;
                    setLevel(lv);
                  }}
                  className={`rounded-lg px-1 py-0.5 text-[13px] sm:text-[13px] font-semibold ring-1 transition active:scale-[0.98]
                    ${disabledCls}
                    ${
                      selected
                        ? "bg-slate-200/10 text-slate-100 ring-white/20"
                        : "bg-slate-800/40 text-slate-300 ring-white/10 hover:bg-slate-700/40"
                    }`}
                >
                  {lv}Lv
                </button>
              );
            })}
          </div>

          <span className="shrink-0 text-sm font-extrabold">
            {!hasData || !base ? (
              <span className="text-slate-400">--s</span>
            ) : haste === 0 ? (
              <span className={`${cdClassName} text-lg font-black`}>{cd}s</span>
            ) : (
              <>
                <span className="text-slate-100 text-[11px] font-semibold">
                  {base}s
                </span>
                <span className="mx-1 text-slate-100">→</span>
                <span className={`${cdClassName} text-lg`}>{cd}s</span>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
