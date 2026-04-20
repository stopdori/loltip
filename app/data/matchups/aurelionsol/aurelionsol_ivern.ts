// app/data/matchups/aurelionsol/aurelionsol_ivern.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_ivern: MatchupSummary = {
  champs: ["aurelionsol", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 아이번 Q2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 아이번 Q2의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Ivern's Q2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Ivern's Q2 [[DASH]]."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
