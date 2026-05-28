// app/data/matchups/brand/brand_samira.ts
import type { MatchupSummary } from "../_types";

export const brand_samira: MatchupSummary = {
  champs: ["brand", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Samira's E [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Samira's R [[SKILL_CHANNEL]]."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
