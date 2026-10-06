// app/data/matchups/mel/mel_syndra.ts
import type { MatchupSummary } from "../_types";

export const mel_syndra: MatchupSummary = {
  champs: ["mel", "syndra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 신드라 평타, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 신드라 E(Q의 구체 [[KNOCKBACK]])의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 단, E로 [[KNOCKBACK]]된 Q(구체)는 [[REFLECT]]에 닿으면 즉시 정지.", 
        "W의 [[REFLECT]]로 신드라 Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Syndra's basic attacks and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] can block Syndra's E (Q sphere [[KNOCKBACK]]) [[PROJECTILE]]. [[EXIST]] \n However, a Q sphere [[KNOCKBACK]]ed by E stops immediately on touching the [[REFLECT]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Syndra's Q, W, or E. [[NOT_EXIST]]"],
    },
    syndra: {
      ko: [],
      en: [],
    },
  },
};
