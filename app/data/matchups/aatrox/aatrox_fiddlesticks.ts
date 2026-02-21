// app/data/matchups/aatrox/aatrox_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const aatrox_fiddlesticks: MatchupSummary = {
  champs: ["aatrox", "fiddlesticks"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 피들스틱 W, R(시전집중)을 끊을 수 있음"],
      en: [],
    },
    fiddlesticks: {
      ko: ["피들스틱 W는 아트록스 Q끝, W [[GRAB]]효과로 끊길 수 있음", "피들스틱 R은 시전중일 때는 동일, 시전 후엔 끊기지 않음"],
      en: ["Fiddlesticks' W can be interrupted by Aatrox's Q (sweet spot) or W pull", "Fiddlesticks' R can be interrupted while channeling, but it cannot be stopped once it has been cast"],
    },
  },
};
