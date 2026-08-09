// app/data/matchups/aurelionsol/aurelionsol_rell.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_rell: MatchupSummary = {
  champs: ["aurelionsol", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 렐 W(붕괴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 렐 W의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Rell's W (Ferromancy) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Rell's W [[DASH]]."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
