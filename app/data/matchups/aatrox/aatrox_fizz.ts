// app/data/matchups/aatrox/aatrox_fizz.ts
import type { MatchupSummary } from "../_types";

export const aatrox_fizz: MatchupSummary = {
  champs: ["aatrox", "fizz"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 피즈 Q를 끊을 수 있음", "아트록스 W를 맞고 피즈가 E를 사용하면 [[TETHER]]효과가 남아있고, 벗어나지 않으면 [[GRAB]] 뿐만아니라 데미지도 들어감"],
      en: ["If Aatrox hits Fizz with W and Fizz enters an untargetable state with E, as long as he does not leave the range, he will still take damage and be pulled back"],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
