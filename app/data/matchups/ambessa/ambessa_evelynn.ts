// app/data/matchups/ambessa/ambessa_evelynn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_evelynn: MatchupSummary = {
  champs: ["ambessa", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 이블린 E의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 이블린 W의 [[CHARM]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Evelynn's E [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Evelynn's W [[CHARM]]. \n However, the [[CHARM]] still applies after [[UNSTOPPABLE]] ends."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
