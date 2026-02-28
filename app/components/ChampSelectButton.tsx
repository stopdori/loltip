"use client";

import Image from "next/image";
import type { Champ } from "../data/champions";

type Props = {
  label: string;
  lang: "ko" | "en";
  selected: Champ | null;
  onClick: () => void;
  onClear?: () => void;
};

export default function ChampSelectButton({
  label,
  lang,
  selected,
  onClick,
  onClear,
}: Props) {


  const title = selected ? (lang === "ko" ? selected.ko : selected.en) : label;

  const imgSrc = selected
    ? `/champs/${selected.id}.webp`
    : `/ui/SelectChamp.png`;

  const handleClear = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  onClear?.();
};

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="
        group
        relative
        w-full max-w-[210px] sm:max-w-[230px]
        rounded-2xl
        bg-slate-800/60 hover:bg-slate-700/60
        transition
        p-4
        border border-white/10 hover:border-white/20
        shadow-lg
        flex flex-col items-center
        cursor-pointer
      "
    >

      {/* 🔁 초기화 버튼 */}
      <button
        type="button"
        onClick={handleClear}
        className="
          absolute top-2 right-2
          w-7 h-7
          rounded-full
          bg-slate-900/80 hover:bg-yellow-400
          text-slate-200 hover:text-black
          border border-white/15
          flex items-center justify-center
          text-sm
          transition
          z-10
        "
        title="초기화"
      >
        ⟳
      </button>

      <div className="text-sm font-semibold text-slate-300 text-center mb-2">
        {label}
      </div>

      <div className="relative w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] rounded-xl overflow-hidden bg-slate-900/40 border border-white/10">
        <Image
          src={imgSrc}
          alt={title}
          fill
          unoptimized
          priority
          className="object-cover group-hover:scale-[1.03] transition"
          sizes="120px"
        />
      </div>

      <div className="mt-4 text-center font-semibold text-slate-100">
        {selected ? title : <span className="text-slate-400">선택하기</span>}
      </div>
    </div>
  );
}