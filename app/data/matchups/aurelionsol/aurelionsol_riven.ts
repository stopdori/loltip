// app/data/matchups/aurelionsol/aurelionsol_riven.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_riven: MatchupSummary = {
  champs: ["aurelionsol", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Riven's Q and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Riven's Q and E [[DASH]]."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
