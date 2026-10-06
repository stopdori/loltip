// app/data/matchups/mel/mel_zoe.ts
import type { MatchupSummary } from "../_types";

export const mel_zoe: MatchupSummary = {
  champs: ["mel", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 조이 평타(일반), Q1, Q2, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 조이 평타([[EMPOWERED]]), E([[ZONE]])를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Zoe's basic attacks (normal), Q1, Q2, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Zoe's basic attacks ([[EMPOWERED]]) or E ([[ZONE]]). [[NOT_EXIST]]"],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
