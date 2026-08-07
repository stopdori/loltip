// app/data/matchups/amumu/amumu_thresh.ts
import type { MatchupSummary } from "../_types";

export const amumu_thresh: MatchupSummary = {
  champs: ["amumu", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 쓰레쉬 Q2, W의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 쓰레쉬 Q의 [[GRAB]], [[STUN]] / E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Thresh's Q2 and W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Thresh's Q2 and W [[DASH]].", "R [[STUN]] can interrupt Thresh's Q2 and W [[DASH]].", "Q [[CC_BUFFER]] can ignore Thresh's Q [[GRAB]] [[STUN]] and E [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
