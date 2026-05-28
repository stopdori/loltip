// app/data/matchups/brand/brand_yuumi.ts
import type { MatchupSummary } from "../_types";

export const brand_yuumi: MatchupSummary = {
  champs: ["brand", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "브랜드 Q의 [[STUN]]로 유미 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] can interrupt Yuumi's W [[DASH]].",
        "Brand's Q [[STUN]] can interrupt Yuumi's R [[SKILL_CHANNEL]]."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
