// app/data/matchups/azir/azir_brand.ts
import type { MatchupSummary } from "../_types";

export const azir_brand: MatchupSummary = {
  champs: ["azir", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: [],
      en: [],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
