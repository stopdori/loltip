"use client";

import Image from "next/image";
import type { Champ } from "../data/champions";

type Props = {
  label: string;
  lang: "ko" | "en";
  selected: Champ | null;
  onClick: () => void;
};

export default function ChampSelectButton({
  label,
  lang,
  selected,
  onClick,
}: Props) {
  const title = selected ? (lang === "ko" ? selected.ko : selected.en) : label;

  const imgSrc = selected
    ? `/champs/${selected.id}.webp`
    : `/ui/SelectChamp.png`;

  return (
    <button
      onClick={onClick}
      className="
        group
        w-[220px] sm:w-[260px]
        rounded-2xl
        bg-slate-800/60 hover:bg-slate-700/60
        transition
        p-6
        border border-white/10 hover:border-white/20
        shadow-lg
        flex flex-col items-center
      "
    >
      {/* 상단 라벨 */}
      <div className="text-sm font-semibold text-slate-300 text-center mb-3">
        {label}
      </div>

      {/* 챔피언 아이콘 */}
      <div className="relative w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] rounded-xl overflow-hidden bg-slate-900/40 border border-white/10">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.03] transition"
          sizes="120px"
        />
      </div>

      {/* 챔피언 이름 / 선택하기 */}
      <div className="mt-4 text-center font-semibold text-slate-100">
        {selected ? title : <span className="text-slate-400">선택하기</span>}
      </div>
    </button>
  );
}
