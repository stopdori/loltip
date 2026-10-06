// app/data/matchups/locke/locke_mel.ts
import type { MatchupSummary } from "../_types";

export const locke_mel: MatchupSummary = {
  champs: ["locke", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    locke: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 로크 Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q의 [[DEBUFF_STACK]]은 멜 평타로 발동시킬 수 있음. \n 단, R는 도착 지점까지는 [[PROJECTILE]] 판정. 설치된 [[ZONE]]은 [[REFLECT]] 불가능.", 
        "W의 [[REFLECT]]로 로크 평타, E1, E2를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 로크 E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Locke's Q and R [[PROJECTILE]]. [[EXIST]] \n However, Q's [[DEBUFF_STACK]] can be triggered by Mel's basic attacks. \n However, R counts as a [[PROJECTILE]] until it reaches its destination. A placed [[ZONE]] cannot be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Locke's basic attacks, E1, or E2. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Locke's E2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
