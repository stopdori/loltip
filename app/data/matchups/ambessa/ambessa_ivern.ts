// app/data/matchups/ambessa/ambessa_ivern.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ivern: MatchupSummary = {
  champs: ["ambessa", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 아이번 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 아이번 Q의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Ivern's Q [[DASH]].", "R [[UNSTOPPABLE]] can ignore Ivern's Q [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
