// app/data/matchups/evelynn/evelynn_mel.ts
import type { MatchupSummary } from "../_types";

export const evelynn_mel: MatchupSummary = {
  champs: ["evelynn", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 이블린 Q1, Q2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 이블린 평타, W([[MARK]]), E(일반, [[EMPOWERED]]), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]] \n 단, 이블린이 W를 걸고 Q로 발동시키려고 했을 때, 멜이 Q를 [[REFLECT]] 하면 W가 발동하지 않음. \n 이어서 다른 수단으로는 발동시킬 수 있음.", 
      "E의 [[ROOT]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Evelynn's Q1 and Q2 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Evelynn's basic attacks, W ([[MARK]]), E (normal, [[EMPOWERED]]), or R. [[NOT_EXIST]] \n However, if Evelynn applies W and tries to trigger it with Q, and Mel [[REFLECT]]s the Q, W does not trigger. \n It can still be triggered afterward by other means.", 
        "E [[ROOT]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
