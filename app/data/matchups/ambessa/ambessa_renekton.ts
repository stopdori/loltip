// app/data/matchups/ambessa/ambessa_renekton.ts
import type { MatchupSummary } from "../_types";

export const ambessa_renekton: MatchupSummary = {
  champs: ["ambessa", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 레넥톤 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Renekton's E [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Renekton's W [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
