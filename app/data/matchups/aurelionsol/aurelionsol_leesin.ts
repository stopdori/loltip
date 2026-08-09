// app/data/matchups/aurelionsol/aurelionsol_leesin.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_leesin: MatchupSummary = {
  champs: ["aurelionsol", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 리신 Q2, W(방호)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 리신 Q2, W의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Lee Sin's Q2 and W (Safeguard) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Lee Sin's Q2 and W [[DASH]]."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
