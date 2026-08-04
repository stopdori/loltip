// app/data/matchups/ambessa/ambessa_leona.ts
import type { MatchupSummary } from "../_types";

export const ambessa_leona: MatchupSummary = {
  champs: ["ambessa", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 레오나 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 레오나 Q의 [[STUN]], E의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Leona's E [[DASH]].", "R [[UNSTOPPABLE]] can ignore Leona's Q [[STUN]], E [[ROOT]], and R [[STUN]]. \n However, the [[STUN]] and [[ROOT]] still apply after [[UNSTOPPABLE]] ends."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
