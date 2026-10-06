// app/data/matchups/katarina/katarina_mel.ts
import type { MatchupSummary } from "../_types";

export const katarina_mel: MatchupSummary = {
  champs: ["katarina", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    katarina: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카타리나 Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q의 [[DROP]] 생성. 멜이 밟으면 [[AOE]] [[DMG_MAGIC]]도 발동. \n 단, R의 [[SWARM]]으로 다른 대상에게 발사한 [[PROJECTILE]]를 함께 [[REFLECT]]하면 \n [[REFLECT]]한 모든 [[PROJECTILE]]를 카타리나에게 되돌려 주지만 효과는 1개만 맞은 것처럼 적용.", 
        "W의 [[REFLECT]]로 카타리나 평타, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 카타리나 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Katarina's Q and R [[PROJECTILE]]. [[EXIST]] \n However, Q's [[DROP]] is created. If Mel steps on it, the [[AOE]] [[DMG_MAGIC]] also triggers. \n However, if the [[PROJECTILE]]s fired at other targets by R's [[SWARM]] are [[REFLECT]]ed together, \n all [[REFLECT]]ed [[PROJECTILE]]s return to Katarina, but the effect applies as if only one hit.", 
        "W [[REFLECT]] cannot [[REFLECT]] Katarina's basic attacks, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Katarina's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
