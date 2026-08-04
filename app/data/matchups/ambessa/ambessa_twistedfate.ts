// app/data/matchups/ambessa/ambessa_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const ambessa_twistedfate: MatchupSummary = {
  champs: ["ambessa", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 트페 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 트페 W(골드)의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Twisted Fate's W (gold card) [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
