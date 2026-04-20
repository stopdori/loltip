// app/data/matchups/aurelionsol/aurelionsol_ornn.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_ornn: MatchupSummary = {
  champs: ["aurelionsol", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Ornn's E and R2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Ornn's E and R2 [[DASH]]."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
