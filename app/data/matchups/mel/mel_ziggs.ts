// app/data/matchups/mel/mel_ziggs.ts
import type { MatchupSummary } from "../_types";

export const mel_ziggs: MatchupSummary = {
  champs: ["mel", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 직스 평타(일반, [[EMPOWERED]]), Q, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, W는 도착 지점까지는 [[PROJECTILE]] 판정. 도착한 [[ZONE]]은 [[REFLECT]] 불가능. \n 단, [[REFLECT]]된 W도 타워를 철거할 수 있음.", 
        "E의 [[ROOT]]으로 직스 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Ziggs's basic attacks (normal, [[EMPOWERED]]), Q, W, and E [[PROJECTILE]]. [[EXIST]] \n However, W counts as a [[PROJECTILE]] until it reaches its destination. The [[ZONE]] at the destination cannot be [[REFLECT]]ed. \n However, a [[REFLECT]]ed W can also demolish turrets.", 
        "E [[ROOT]] cannot interrupt Ziggs's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
