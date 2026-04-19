// app/data/matchups/ambessa/ambessa_volibear.ts
import type { MatchupSummary } from "../_types";

export const ambessa_volibear: MatchupSummary = {
  champs: ["ambessa", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 볼리베어 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Volibear's Q [[TRANSFORM]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Volibear's Q [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
