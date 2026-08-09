// app/data/matchups/aurelionsol/aurelionsol_renekton.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_renekton: MatchupSummary = {
  champs: ["aurelionsol", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Renekton's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Renekton's E [[DASH]]."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
