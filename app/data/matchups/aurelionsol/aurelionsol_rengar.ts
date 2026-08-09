// app/data/matchups/aurelionsol/aurelionsol_rengar.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_rengar: MatchupSummary = {
  champs: ["aurelionsol", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Rengar's P and R [[DASH]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
