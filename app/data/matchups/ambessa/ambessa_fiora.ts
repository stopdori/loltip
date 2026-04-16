// app/data/matchups/ambessa/ambessa_fiora.ts
import type { MatchupSummary } from "../_types";

export const ambessa_fiora: MatchupSummary = {
  champs: ["ambessa", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로, 다른 챔프에 의해 발동된 피오라 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Fiora's Q [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Fiora's W [[STUN]] activated by another champion. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
