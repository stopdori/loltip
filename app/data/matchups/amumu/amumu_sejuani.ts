// app/data/matchups/amumu/amumu_sejuani.ts
import type { MatchupSummary } from "../_types";

export const amumu_sejuani: MatchupSummary = {
  champs: ["amumu", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 세주아니 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 세주아니 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 세주아니 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 세주아니 Q의 [[AIRBORNE]], E의 [[STUN]], R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Sejuani's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Sejuani's Q [[DASH]].", "R [[STUN]] can interrupt Sejuani's Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Sejuani's Q [[AIRBORNE]], E [[STUN]], and R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
