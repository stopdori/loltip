// app/data/matchups/bard/bard_brand.ts
import type { MatchupSummary } from "../_types";

export const bard_brand: MatchupSummary = {
  champs: ["bard", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Bard's E (wall-travel) [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
