// app/data/matchups/malphite/malphite_mel.ts
import type { MatchupSummary } from "../_types";

export const malphite_mel: MatchupSummary = {
  champs: ["malphite", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 말파이트 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 말파이트 평타, W(평타, 충격파), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Malphite's Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Malphite's basic attacks, W (basic attack, shockwave), E, or R. [[NOT_EXIST]]"],
    },
  },
};
