"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Champ } from "../data/champions";
import { filterChampions } from "../utils/champSearch";

type Props = {
  open: boolean;
  lang: "ko" | "en";
  champions: Champ[];
  title: string;
  onClose: () => void;
  onPick: (champ: Champ) => void;
};

export default function ChampSelectModal({
  open,
  lang,
  champions,
  title,
  onClose,
  onPick,
}: Props) {
  const [q, setQ] = useState("");

  // 열릴 때 검색어 초기화 + ESC 닫기
  useEffect(() => {
    if (!open) return;
    setQ("");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const filtered = useMemo(
    () => filterChampions(champions, q, lang),
    [q, champions, lang]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* 배경 */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* 모달 */}
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="font-bold text-lg">{title}</div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-sm"
          >
            닫기
          </button>
        </div>

        <div className="p-5">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === "ko" ? "챔피언 검색 (예: 나 / ㅇ / rkfps / df=아리)" : "Search champion (e.g. a / rkfps / df=Ahri)"}
            className="w-full rounded-xl bg-slate-800/70 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
            autoFocus
          />

          <div className="mt-5 max-h-[55vh] overflow-auto pr-1">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {filtered.map((c) => {
                const name = lang === "ko" ? c.ko : c.en;
                return (
                  <button
                    key={c.id}
                    onClick={() => onPick(c)}
                    className="rounded-xl bg-slate-800/50 hover:bg-slate-700/60 transition p-2 border border-white/10 hover:border-white/20"
                    title={name}
                  >
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/10 bg-slate-950/30">
                      <Image
                        src={`/champs/${c.id}.webp`}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-xs text-center truncate">
                      {name}
                    </div>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center text-slate-400 py-10">
                {lang === "ko" ? "검색 결과가 없어요." : "No results."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
