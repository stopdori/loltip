// app/data/matchups/aurelionsol/aurelionsol_naafiri.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_naafiri: MatchupSummary = {
  champs: ["aurelionsol", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Naafiri's E and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Naafiri's E and R [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Naafiri's R [[SKILL_CHANNEL]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
