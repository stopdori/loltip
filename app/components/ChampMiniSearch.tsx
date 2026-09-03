"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import type { Champ } from "@/app/data/champions";
import { filterChampions } from "@/app/utils/champSearch";

type Lang = "ko" | "en";

type Props = {
  lang: Lang;
  champions: Champ[];
  // 이 검색창이 담당하는 쪽(내 챔피언 / 상대 챔피언)
  side: "my" | "enemy";
  myChampId: string | null;
  enemyChampId: string | null;
};

const MAX_RESULTS = 4;

export default function ChampMiniSearch({
  lang,
  champions,
  side,
  myChampId,
  enemyChampId,
}: Props) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!q.trim()) return [];
    return filterChampions(champions, q, lang).slice(0, MAX_RESULTS);
  }, [q, champions, lang]);

  // 바깥 클릭 / ESC 닫기
  useEffect(() => {
    if (!open) return;

    const onDocMouseDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [results]);

  function goToPair(pickedId: string) {
    const nextMy = side === "my" ? pickedId : myChampId;
    const nextEnemy = side === "enemy" ? pickedId : enemyChampId;

    if (nextMy && nextEnemy) {
      // 기존 URL 정규화 규칙과 동일: id 사전식 정렬 후 "-vs-" 결합
      const pair = [nextMy, nextEnemy].sort().join("-vs-");
      router.push(`/matchup/${pair}?first=${pickedId}`);
      return;
    }
    if (nextMy && !nextEnemy) {
      router.push(`/champ/${nextMy}?side=my`);
      return;
    }
    if (!nextMy && nextEnemy) {
      router.push(`/champ/${nextEnemy}?side=enemy`);
    }
  }

  function handlePick(c: Champ) {
    setQ("");
    setOpen(false);
    goToPair(c.id);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < results.length) {
        e.preventDefault();
        handlePick(results[activeIndex]);
      }
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full mb-1.5">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500/70"
      >
        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
      </svg>
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (q.trim()) setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        aria-label={lang === "ko" ? "챔피언 빠른 검색" : "Quick champion search"}
        className="w-full rounded-lg bg-slate-800/70 border border-white/10 pl-7 pr-2.5 py-1.5 text-xs sm:text-sm outline-none focus:border-white/20"
      />

      {open && q.trim() && (
        <div className="absolute left-0 right-0 top-full mt-1 z-30 rounded-lg bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
          {results.length > 0 ? (
            results.map((c, i) => {
              const name = lang === "ko" ? c.ko : c.en;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handlePick(c)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-left transition ${
                    activeIndex === i ? "bg-slate-700/60" : "hover:bg-slate-700/60"
                  }`}
                >
                  <div className="relative w-6 h-6 rounded overflow-hidden border border-white/10 bg-slate-950/30 shrink-0">
                    <Image
                      src={`/champs/${c.id}.webp`}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs truncate">{name}</span>
                </button>
              );
            })
          ) : (
            <div className="px-3 py-2 text-xs text-slate-400 text-center">
              {lang === "ko" ? "검색 결과 없음" : "No results"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
