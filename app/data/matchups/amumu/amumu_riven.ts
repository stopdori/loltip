// app/data/matchups/amumu/amumu_riven.ts
import type { MatchupSummary } from "../_types";

export const amumu_riven: MatchupSummary = {
  champs: ["amumu", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 리븐 Q1, Q2, Q3, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 리븐의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 리븐 Q1, Q2, Q3, E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 리븐 Q의 [[AIRBORNE]], W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Riven's Q1, Q2, Q3, and E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Riven's [[DASH]].", "R [[STUN]] can interrupt Riven's Q1, Q2, Q3, and E [[DASH]].", "Q [[CC_BUFFER]] can ignore Riven's Q [[AIRBORNE]] and W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
