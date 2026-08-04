// app/data/matchups/ambessa/ambessa_warwick.ts
import type { MatchupSummary } from "../_types";

export const ambessa_warwick: MatchupSummary = {
  champs: ["ambessa", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 워윅 Q의 [[DASH]](이론상), R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Warwick's Q [[DASH]] (theoretically) and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Warwick's E [[FEAR]] and R [[SUPPRESS]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
