// app/data/matchups/aurelionsol/aurelionsol_talon.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_talon: MatchupSummary = {
  champs: ["aurelionsol", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 탈론 Q, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Talon's Q and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Talon's Q and E [[DASH]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
