// app/data/matchups/brand/brand_viego.ts
import type { MatchupSummary } from "../_types";

export const brand_viego: MatchupSummary = {
  champs: ["brand", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Viego's W [[SKILL_CHARGED]]."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
