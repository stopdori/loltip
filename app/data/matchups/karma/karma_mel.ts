// app/data/matchups/karma/karma_mel.ts
import type { MatchupSummary } from "../_types";

export const karma_mel: MatchupSummary = {
  champs: ["karma", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    karma: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카르마 평타, Q, RQ의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 카르마 W, RW를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Karma's basic attacks, Q, and RQ [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Karma's W or RW. [[NOT_EXIST]]"],
    },
  },
};
