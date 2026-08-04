// app/data/matchups/ambessa/ambessa_rammus.ts
import type { MatchupSummary } from "../_types";

export const ambessa_rammus: MatchupSummary = {
  champs: ["ambessa", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 람머스 Q의 [[AIRBORNE]], E의 [[TAUNT]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Rammus's Q [[TRANSFORM]].", "R [[UNSTOPPABLE]] can ignore Rammus's Q [[AIRBORNE]], E [[TAUNT]], and R [[AIRBORNE]]. \n However, the [[TAUNT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
