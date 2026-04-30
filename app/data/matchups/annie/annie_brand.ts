// app/data/matchups/annie/annie_brand.ts
import type { MatchupSummary } from "../_types";

export const annie_brand: MatchupSummary = {
  champs: ["annie", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 R(티버)의 [[SUMMON]]으로 브랜드 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's R(Tibbers) [[SUMMON]] can block Brand's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    brand: {
      ko: ["브랜드 R의 [[CHAIN]]는 애니 R의 [[SUMMON]]된 티버에도 튕길 수 있음."],
      en: ["Brand's R [[CHAIN]] can also bounce off Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
