// app/data/matchups/aurelionsol/aurelionsol_gragas.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_gragas: MatchupSummary = {
  champs: ["aurelionsol", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 그라가스 E(배치기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Gragas's E (Body Slam) [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Gragas's E [[DASH]]."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
