// app/data/matchups/amumu/amumu_ziggs.ts
import type { MatchupSummary } from "../_types";

export const amumu_ziggs: MatchupSummary = {
  champs: ["amumu", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 직스 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 직스 W의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 직스 W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 직스 W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Ziggs's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ziggs's W [[DASH]].", "Amumu's R [[STUN]] can interrupt Ziggs's W [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Ziggs's W [[AIRBORNE]] and continue [[DASH]]."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
