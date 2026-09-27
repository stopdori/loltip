"use client";

export type RemoteBarState = "unanswered" | "answered" | "correct" | "incorrect";

const COLOR: Record<RemoteBarState, string> = {
  unanswered: "bg-slate-600",
  answered: "bg-yellow-400",
  correct: "bg-emerald-400",
  incorrect: "bg-red-400",
};

type Difficulty = "easy" | "normal" | "hard";

type Props = {
  total: number;
  current: number;
  difficulties: Difficulty[];
  getState: (i: number) => RemoteBarState;
  isBlinking?: (i: number) => boolean;
  onSelect: (i: number) => void;
};

// 문제 풀이/채점 화면이 공유하는 마디 진행바.
// PC: 한 줄, 난이도가 바뀌는 지점마다 칸 사이 간격이 넓어짐(구간 경계는 difficulties 배열에서 계산).
// 모바일: 15칸씩 두 줄, 난이도 구간 구분 없이 균등 배치.
export default function RemoteBar({ total, current, difficulties, getState, isBlinking, onSelect }: Props) {
  const bar = (i: number) => {
    const state = getState(i);
    const isCurrent = i === current;
    const blink = !isCurrent && (isBlinking?.(i) ?? false);
    return (
      <span
        className={[
          "block w-full h-[6px] rounded-full transition-all",
          COLOR[state],
          isCurrent
            ? "ring-2 ring-yellow-300 scale-y-[1.7]"
            : blink
              ? "ring-2 ring-sky-400"
              : "ring-0",
        ].join(" ")}
      />
    );
  };

  return (
    <>
      {/* PC: 한 줄, 난이도 구간 경계에서 간격 확대 */}
      <div className="hidden sm:flex items-center">
        {Array.from({ length: total }).map((_, i) => {
          const isLast = i === total - 1;
          const boundaryAfter = !isLast && difficulties[i] !== difficulties[i + 1];
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              aria-label={`${i + 1}`}
              style={{ marginRight: isLast ? 0 : boundaryAfter ? "10px" : "3px" }}
              className="flex-1 py-2.5 flex items-center justify-center active:scale-95 transition"
            >
              {bar(i)}
            </button>
          );
        })}
      </div>

      {/* 모바일: 15칸씩 두 줄, 균등 간격 */}
      <div className="grid sm:hidden grid-cols-[repeat(15,minmax(0,1fr))] gap-x-[3px] gap-y-[3px]">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`${i + 1}`}
            className="py-2.5 flex items-center justify-center active:scale-95 transition"
          >
            {bar(i)}
          </button>
        ))}
      </div>
    </>
  );
}
