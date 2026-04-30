// app/data/matchups/akali/akali_brand.ts
import type { MatchupSummary } from "../_types";

export const akali_brand: MatchupSummary = {
  champs: ["akali", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
