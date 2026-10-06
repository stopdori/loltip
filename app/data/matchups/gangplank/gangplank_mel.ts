// app/data/matchups/gangplank/gangplank_mel.ts
import type { MatchupSummary } from "../_types";

export const gangplank_mel: MatchupSummary = {
  champs: ["gangplank", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gangplank: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 갱플랭크 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 갱플랭크 평타(일반, P), E [[DETONATE]](평타, Q, [[CHAIN]]), R(일반, 죽음의 여신 [[EMPOWERED]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Gangplank's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Gangplank's basic attacks (normal, P), E [[DETONATE]] (basic attack, Q, [[CHAIN]]), or R (normal, Death's Daughter [[EMPOWERED]]). [[NOT_EXIST]]"],
    },
  },
};
