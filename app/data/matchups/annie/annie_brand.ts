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
      ko: ["R로 [[SUMMON]]된 티버로 브랜드 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["R [[SUMMON]]ed Tibbers can block Brand's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    brand: {
      ko: ["브랜드 R의 [[CHAIN]]는 애니 R의 [[SUMMON]]된 티버에도 [[CHAIN]] 될 수 있음."],
      en: ["Brand's R [[CHAIN]] can also [[CHAIN]] onto Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
