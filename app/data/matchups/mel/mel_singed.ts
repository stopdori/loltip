// app/data/matchups/mel/mel_singed.ts
import type { MatchupSummary } from "../_types";

export const mel_singed: MatchupSummary = {
  champs: ["mel", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 신지드 W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 신지드 평타, Q, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Singed's W [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Singed's basic attacks, Q, or E. [[NOT_EXIST]]"],
    },
    singed: {
      ko: [],
      en: [],
    },
  },
};
