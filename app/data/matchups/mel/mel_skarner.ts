// app/data/matchups/mel/mel_skarner.ts
import type { MatchupSummary } from "../_types";

export const mel_skarner: MatchupSummary = {
  champs: ["mel", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 스카너 Q2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 스카너 평타(일반, Q1 [[EMPOWERED]]), W([[AOE]] 피해), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Skarner's Q2 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Skarner's basic attacks (normal, Q1 [[EMPOWERED]]), W ([[AOE]] damage), E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
