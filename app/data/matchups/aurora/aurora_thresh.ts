// app/data/matchups/aurora/aurora_thresh.ts
import type { MatchupSummary } from "../_types";

export const aurora_thresh: MatchupSummary = {
  champs: ["aurora", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 쓰레쉬 Q의 [[STUN]] [[GRAB]], E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, Q의 [[GRAB]], E의 [[AIRBORNE]]으로 끌려가거나 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 쓰레쉬 Q의 [[STUN]] [[GRAB]], E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Thresh's Q [[STUN]] [[GRAB]] and E [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, the [[DASH]] activates while being pulled by Q's [[GRAB]] or knocked back by E's [[AIRBORNE]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Thresh's Q [[STUN]] [[GRAB]] and E [[AIRBORNE]] and continue [[DASH]]."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
