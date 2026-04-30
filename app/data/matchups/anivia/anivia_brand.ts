// app/data/matchups/anivia/anivia_brand.ts
import type { MatchupSummary } from "../_types";

export const anivia_brand: MatchupSummary = {
  champs: ["anivia", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "브랜드 R의 [[CHAIN]]는 애니비아 P(알)에도 문제없이 튕김."],
      en: ["Brand's Q [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "Brand's R [[CHAIN]] also bounces off Anivia's P (egg)."],
    },
  },
};
