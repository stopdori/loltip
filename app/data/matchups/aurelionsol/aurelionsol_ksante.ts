// app/data/matchups/aurelionsol/aurelionsol_ksante.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_ksante: MatchupSummary = {
  champs: ["aurelionsol", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 크산테 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 크산테 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt K'Sante's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt K'Sante's E [[DASH]]."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
