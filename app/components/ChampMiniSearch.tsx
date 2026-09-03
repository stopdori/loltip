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
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  // 이 검색창이 담당하는 쪽(내/상대)에 현재 선택된 챔피언 이름.
  // 포커스가 없고 입력값도 비어있을 때 인풋 안에 이 이름을 표시한다.
  const ownChampId = side === "my" ? myChampId : enemyChampId;
  const ownChamp = ownChampId ? champions.find((c) => c.id === ownChampId) ?? null : null;
  const ownChampName = ownChamp ? (lang === "ko" ? ownChamp.ko : ownChamp.en) : null;
  const showSelectedName = !focused && !q.trim() && !!ownChampName;
  // 선택된 챔피언이 없고 포커스도 안 된 빈 상태에서만 안내 텍스트를 보여준다.
  const showPlaceholder = !focused && !q.trim() && !ownChampName;

  // q가 비어있으면 filterChampions가 필터 없이 lang 기준 정렬된 전체 목록을
  // 그대로 반환하므로(ko: 가렌부터, en: Aatrox부터), 별도 분기 없이 재사용한다.
  const results = useMemo(() => {
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
      // ChampSelectModal의 onPick과 동일하게: 어느 쪽에서 고르든 항상 왼쪽(my)
      // 챔피언 id를 first=에 고정해서 좌우가 꼬이지 않도록 함
      router.push(`/matchup/${pair}?first=${nextMy}`);
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
    <div ref={wrapRef} className="relative w-[156px] sm:w-[216px] mb-6 sm:mb-12">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500/70"
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
          setFocused(true);
          setOpen(true);
        }}
        onBlur={() => setFocused(false)}
        onKeyDown={handleKeyDown}
        aria-label={lang === "ko" ? "챔피언 빠른 검색" : "Quick champion search"}
        className="w-full h-[36px] sm:h-[40px] rounded-lg bg-slate-800/70 border border-white/10 pl-8 pr-2.5 text-xs sm:text-sm outline-none focus:border-white/20"
      />

      {showSelectedName && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-semibold text-slate-200 truncate px-8">
          {ownChampName}
        </span>
      )}

      {showPlaceholder && (
        <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-slate-500/70 truncate">
          {lang === "ko" ? "챔피언" : "Search"}
        </span>
      )}

      {open && (
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
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded overflow-hidden border border-white/10 bg-slate-950/30 shrink-0">
                    <Image
                      src={`/champs/${c.id}.webp`}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs sm:text-sm truncate">{name}</span>
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
