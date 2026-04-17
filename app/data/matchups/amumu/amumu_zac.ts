// app/data/matchups/amumu/amumu_zac.ts
import type { MatchupSummary } from "../_types";

export const amumu_zac: MatchupSummary = {
  champs: ["amumu", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 자크 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 자크 Q, E, R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Zac's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Zac's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Zac's E [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Zac's Q, E, and R [[AIRBORNE]] and continue [[DASH]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
