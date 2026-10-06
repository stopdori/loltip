// app/data/matchups/mel/mel_shaco.ts
import type { MatchupSummary } from "../_types";

export const mel_shaco: MatchupSummary = {
  champs: ["mel", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 샤코 W, E, R([[CLONE]] [[DETONATE]] 이후 박스의 공격)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 샤코 평타, Q, R([[CLONE]] 공격)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Shaco's W, E, and R (box attacks after the [[CLONE]] [[DETONATE]]s) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Shaco's basic attacks, Q, or R ([[CLONE]] attacks). [[NOT_EXIST]]"],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
