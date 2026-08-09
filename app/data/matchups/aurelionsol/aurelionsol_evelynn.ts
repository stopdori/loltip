// app/data/matchups/aurelionsol/aurelionsol_evelynn.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_evelynn: MatchupSummary = {
  champs: ["aurelionsol", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
