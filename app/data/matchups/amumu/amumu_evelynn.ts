// app/data/matchups/amumu/amumu_evelynn.ts
import type { MatchupSummary } from "../_types";

export const amumu_evelynn: MatchupSummary = {
  champs: ["amumu", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 이블린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 이블린 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 이블린 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 이블린 W의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Evelynn's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Evelynn's E [[DASH]].", "R [[STUN]] can interrupt Evelynn's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Evelynn's W [[CHARM]] and continue [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
