// app/data/matchups/ambessa/ambessa_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ambessa_lissandra: MatchupSummary = {
  champs: ["ambessa", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Lissandra's W [[ROOT]] and R [[STUN]]. \n However, the [[ROOT]] and [[STUN]] still apply after [[UNSTOPPABLE]] ends."],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
