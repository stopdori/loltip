// app/data/matchups/brand/brand_ivern.ts
import type { MatchupSummary } from "../_types";

export const brand_ivern: MatchupSummary = {
  champs: ["brand", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 아이번 Q2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브랜드 R의 [[CHAIN]]는 아이번 R의 [[SUMMON]]된 데이지에 튕길 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Ivern's Q2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Brand's R [[CHAIN]] can bounce off Ivern's R [[SUMMON]]ed Daisy."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
