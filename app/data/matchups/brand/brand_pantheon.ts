// app/data/matchups/brand/brand_pantheon.ts
import type { MatchupSummary } from "../_types";

export const brand_pantheon: MatchupSummary = {
  champs: ["brand", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Pantheon's R [[SKILL_CHANNEL]]."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
