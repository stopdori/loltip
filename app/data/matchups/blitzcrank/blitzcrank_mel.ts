// app/data/matchups/blitzcrank/blitzcrank_mel.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_mel: MatchupSummary = {
  champs: ["blitzcrank", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 블리츠크랭크 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 블리츠크랭크 E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Blitzcrank's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Blitzcrank's E or R. [[NOT_EXIST]]"],
    },
  },
};
