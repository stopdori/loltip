// app/data/matchups/mel/mel_poppy.ts
import type { MatchupSummary } from "../_types";

export const mel_poppy: MatchupSummary = {
  champs: ["mel", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 뽀삐 평타, P(방패 투척), R(긴)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, P는 [[REFLECT]] 했을 때 땅에 방패([[DROP]])이 떨어지고, 주우면 [[SHIELD]]도 유효.", 
        "W의 [[REFLECT]]로 뽀삐 Q, E, R(짧은)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Poppy's basic attacks, P (shield toss), and R (long) [[PROJECTILE]]. [[EXIST]] \n However, when P is [[REFLECT]]ed, the shield ([[DROP]]) falls to the ground, and picking it up still grants the [[SHIELD]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Poppy's Q, E, or R (short). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Poppy's E [[DASH]] and R [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
