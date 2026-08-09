// app/data/matchups/aurelionsol/aurelionsol_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_jarvaniv: MatchupSummary = {
  champs: ["aurelionsol", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 자르반 EQ의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Jarvan IV's EQ (Flag and Drag) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Jarvan IV's EQ [[DASH]]."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
