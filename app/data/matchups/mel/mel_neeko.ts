// app/data/matchups/mel/mel_neeko.ts
import type { MatchupSummary } from "../_types";

export const mel_neeko: MatchupSummary = {
  champs: ["mel", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 니코 평타, Q, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 니코 [[EMPOWERED]] 평타, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Neeko's basic attacks, Q, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Neeko's [[EMPOWERED]] basic attacks or R. [[NOT_EXIST]]"],
    },
    neeko: {
      ko: [],
      en: [],
    },
  },
};
