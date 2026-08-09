// app/data/matchups/aurelionsol/aurelionsol_lucian.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_lucian: MatchupSummary = {
  champs: ["aurelionsol", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 루시안 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Lucian's E [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Lucian's R [[SKILL_CHANNEL]]."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
