// app/data/matchups/brand/brand_naafiri.ts
import type { MatchupSummary } from "../_types";

export const brand_naafiri: MatchupSummary = {
  champs: ["brand", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Naafiri's E or R [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
