// app/data/matchups/mel/mel_orianna.ts
import type { MatchupSummary } from "../_types";

export const mel_orianna: MatchupSummary = {
  champs: ["mel", "orianna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 오리아나 평타의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 오리아나 Q, E의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 단, Q는 [[REFLECT]]에 닿으면 즉시 정지. \n 단, E는 [[REFLECT]]에 닿으면 즉시 오리아나에게 돌아와 몸에 [[ATTACH]].", 
        "W의 [[REFLECT]]로 오리아나 W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Orianna's basic attack [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] can block Orianna's Q and E [[PROJECTILE]]. [[EXIST]] \n However, Q stops immediately on touching the [[REFLECT]]. \n However, E immediately returns to Orianna on touching the [[REFLECT]] and [[ATTACH]]es to her.", 
        "W [[REFLECT]] cannot [[REFLECT]] Orianna's W or R. [[NOT_EXIST]]"],
    },
    orianna: {
      ko: [],
      en: [],
    },
  },
};
