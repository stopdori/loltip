// app/data/matchups/mel/mel_shyvana.ts
import type { MatchupSummary } from "../_types";

export const mel_shyvana: MatchupSummary = {
  champs: ["mel", "shyvana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 쉬바나 E(일반, [[EMPOWERED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 쉬바나 일반폼 평타, Q, W([[DETONATE]] 피해), R / 용형상 평타, Q, W([[DETONATE]] 피해)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Shyvana's E (normal, [[EMPOWERED]]) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Shyvana's Human Form basic attacks, Q, W ([[DETONATE]] damage), R / Dragon Form basic attacks, Q, W ([[DETONATE]] damage). [[NOT_EXIST]]"],
    },
    shyvana: {
      ko: [],
      en: [],
    },
  },
};
