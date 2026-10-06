// app/data/matchups/mel/mel_sion.ts
import type { MatchupSummary } from "../_types";

export const mel_sion: MatchupSummary = {
  champs: ["mel", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 사이온 E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 사이온 평타, Q, W([[DETONATE]] 피해), E(미니언, 몬스터 [[KNOCKBACK]] 충돌 피해), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Sion's E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Sion's basic attacks, Q, W ([[DETONATE]] damage), E (minion/monster [[KNOCKBACK]] collision damage), or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Sion's Q [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
