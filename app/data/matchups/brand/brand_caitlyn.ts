// app/data/matchups/brand/brand_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const brand_caitlyn: MatchupSummary = {
  champs: ["brand", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
