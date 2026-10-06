// app/data/matchups/maokai/maokai_mel.ts
import type { MatchupSummary } from "../_types";

export const maokai_mel: MatchupSummary = {
  champs: ["maokai", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    maokai: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 마오카이 Q, E([[EMPOWERED]] [[CHAIN]]), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 마오카이 평타, Q([[AOE]] [[KNOCKBACK]]), W, E(일반, [[EMPOWERED]] 폭발)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Maokai's Q, E ([[EMPOWERED]] [[CHAIN]]), and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Maokai's basic attacks, Q ([[AOE]] [[KNOCKBACK]]), W, or E (normal, [[EMPOWERED]] explosion). [[NOT_EXIST]]"],
    },
  },
};
