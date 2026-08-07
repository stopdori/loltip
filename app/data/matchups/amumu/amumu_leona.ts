// app/data/matchups/amumu/amumu_leona.ts
import type { MatchupSummary } from "../_types";

export const amumu_leona: MatchupSummary = {
  champs: ["amumu", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 레오나 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 레오나 Q의 [[STUN]], E의 [[ROOT]], R의 [[STUN]] \n 단, [[STUN]], [[ROOT]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Leona's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Leona's E [[DASH]].", "R [[STUN]] can interrupt Leona's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Leona's Q [[STUN]], E [[ROOT]], and R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] and [[ROOT]] still apply."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
