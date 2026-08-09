// app/data/matchups/aurelionsol/aurelionsol_fiora.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_fiora: MatchupSummary = {
  champs: ["aurelionsol", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 피오라 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Fiora's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Fiora's Q [[DASH]]."],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
