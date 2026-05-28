// app/data/matchups/brand/brand_shen.ts
import type { MatchupSummary } from "../_types";

export const brand_shen: MatchupSummary = {
  champs: ["brand", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Shen's R [[SKILL_CHANNEL]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
