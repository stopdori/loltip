// app/data/matchups/aurelionsol/aurelionsol_kindred.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_kindred: MatchupSummary = {
  champs: ["aurelionsol", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Kindred's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Kindred's Q [[DASH]]."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
