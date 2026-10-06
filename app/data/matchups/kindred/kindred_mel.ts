// app/data/matchups/kindred/kindred_mel.ts
import type { MatchupSummary } from "../_types";

export const kindred_mel: MatchupSummary = {
  champs: ["kindred", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kindred: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 킨드레드 평타, Q, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E는 [[DEBUFF_STACK]]도 [[REFLECT]]하고 멜의 [[BA]]로 발동 시킬 수 있음.", 
        "W의 [[REFLECT]]로 킨드레드 W을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Kindred's basic attacks, Q, and E [[PROJECTILE]]. [[EXIST]] \n However, E also [[REFLECT]]s its [[DEBUFF_STACK]], which can be triggered by Mel's [[BA]]s.", 
        "W [[REFLECT]] cannot [[REFLECT]] Kindred's W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Kindred's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
