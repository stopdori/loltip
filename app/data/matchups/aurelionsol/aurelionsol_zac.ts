// app/data/matchups/aurelionsol/aurelionsol_zac.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_zac: MatchupSummary = {
  champs: ["aurelionsol", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Zac's E [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Zac's E [[SKILL_CHARGED]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
