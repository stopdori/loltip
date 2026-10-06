// app/data/matchups/mel/mel_morgana.ts
import type { MatchupSummary } from "../_types";

export const mel_morgana: MatchupSummary = {
  champs: ["mel", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 모르가나 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 모르가나 W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Morgana's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Morgana's W or R. [[NOT_EXIST]]"],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
