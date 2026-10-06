// app/data/matchups/mel/mel_seraphine.ts
import type { MatchupSummary } from "../_types";

export const mel_seraphine: MatchupSummary = {
  champs: ["mel", "seraphine"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 세라핀 평타, Q, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 도착 지점까지는 [[PROJECTILE]] 판정. 도착한 [[ZONE]]은 [[REFLECT]] 불가능.", 
        "W의 [[REFLECT]]로 세라핀 Q([[AOE]] 피해)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Seraphine's basic attacks, Q, E, and R [[PROJECTILE]]. [[EXIST]] \n However, Q counts as a [[PROJECTILE]] until it reaches its destination. The [[ZONE]] at the destination cannot be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Seraphine's Q ([[AOE]] damage). [[NOT_EXIST]]"],
    },
    seraphine: {
      ko: [],
      en: [],
    },
  },
};
