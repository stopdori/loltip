// app/data/matchups/aurelionsol/aurelionsol_vayne.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_vayne: MatchupSummary = {
  champs: ["aurelionsol", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 베인 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Vayne's Q (Tumble) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Vayne's Q [[DASH]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
