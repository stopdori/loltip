// app/data/matchups/amumu/amumu_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const amumu_jarvaniv: MatchupSummary = {
  champs: ["amumu", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 자르반 EQ의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 자르반 EQ의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 자르반 EQ의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q로 자르반 EQ의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jarvan IV's EQ [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Jarvan IV's EQ [[DASH]].", "Amumu's R [[STUN]] can interrupt Jarvan IV's EQ [[DASH]].", "Amumu's Q can ignore Jarvan IV's EQ [[AIRBORNE]] and continue [[DASH]]."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
