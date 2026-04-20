// app/data/matchups/aurelionsol/aurelionsol_leblanc.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_leblanc: MatchupSummary = {
  champs: ["aurelionsol", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt LeBlanc's W [[DASH]]."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
