// app/data/matchups/brand/brand_fizz.ts
import type { MatchupSummary } from "../_types";

export const brand_fizz: MatchupSummary = {
  champs: ["brand", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Fizz's Q [[DASH]]. \n However, the [[STUN]] remains."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
