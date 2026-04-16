// app/data/matchups/ambessa/ambessa_leblanc.ts
import type { MatchupSummary } from "../_types";

export const ambessa_leblanc: MatchupSummary = {
  champs: ["ambessa", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 르블랑 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt LeBlanc's W [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore LeBlanc's E [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
