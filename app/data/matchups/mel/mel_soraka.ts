// app/data/matchups/mel/mel_soraka.ts
import type { MatchupSummary } from "../_types";

export const mel_soraka: MatchupSummary = {
  champs: ["mel", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 소라카 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 [[HEAL]]도 적용.", 
        "W의 [[REFLECT]]로 소라카 E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Soraka's basic attacks and Q [[PROJECTILE]]. [[EXIST]] \n However, Q's [[HEAL]] also applies.", 
        "W [[REFLECT]] cannot [[REFLECT]] Soraka's E. [[NOT_EXIST]]"],
    },
    soraka: {
      ko: [],
      en: [],
    },
  },
};
