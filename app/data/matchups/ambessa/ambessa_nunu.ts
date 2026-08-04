// app/data/matchups/ambessa/ambessa_nunu.ts
import type { MatchupSummary } from "../_types";

export const ambessa_nunu: MatchupSummary = {
  champs: ["ambessa", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 누누 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 누누 W의 [[AIRBORNE]], E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Nunu's W and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Nunu's W [[AIRBORNE]] and E [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
