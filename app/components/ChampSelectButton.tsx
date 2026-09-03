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
      className="group relative flex flex-col items-center cursor-pointer"
    >
      {/* 챔피언 이름은 ChampMiniSearch 인풋 안에, 미선택 상태는 검색창의 돋보기
          아이콘 + 아래 물음표 카드 아트로 이미 표시되므로 별도 텍스트 라벨은 두지 않음 */}

      {/* 바깥 카드 배경/테두리 없이 아이콘 자체만 남김. 크기는 원래 기준(72px/100px) 대비 1.5배 */}
      <div
        className={`relative w-[108px] h-[108px] sm:w-[150px] sm:h-[150px] rounded-xl overflow-hidden bg-slate-900/40 transition-transform duration-100 group-hover:scale-[1.03] ${
          selected
            ? "ring-2 ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]"
            : "ring-1 ring-white/10"
        }`}
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          unoptimized
          priority
          className="object-cover"
          sizes="180px"
        />

        {/* 🔁 초기화 버튼: 아이콘 위 우측 상단 오버레이. 선택된 챔피언이 없으면
            초기화할 대상 자체가 없으므로 렌더링하지 않음 */}
        {selected && (
          <button
            type="button"
            onClick={handleClear}
            className="
              absolute top-2 right-2
              w-7 h-7
              rounded-full
              bg-black/60 hover:bg-yellow-400
              text-yellow-400 hover:text-black
              border border-white/20
              flex items-center justify-center
              text-sm
              transition duration-100
              z-10
            "
            title="초기화"
          >
            ⟳
          </button>
        )}
      </div>
      <div className="h-4 sm:h-10" />
    </div>
  );
}