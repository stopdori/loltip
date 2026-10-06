// app/data/matchups/brand/brand_mel.ts
import type { MatchupSummary } from "../_types";

export const brand_mel: MatchupSummary = {
  champs: ["brand", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 브랜드 평타, Q, E([[CHAIN]]), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 브랜드 P(화상, [[DETONATE]]), W, E([[TARGETED]])를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Brand's basic attacks, Q, E ([[CHAIN]]), and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Brand's P (Ablaze, [[DETONATE]]), W, or E ([[TARGETED]]). [[NOT_EXIST]]"],
    },
  },
};
