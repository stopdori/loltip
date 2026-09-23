// app/data/matchups/malphite/malphite_volibear.ts
import type { MatchupSummary } from "../_types";

export const malphite_volibear: MatchupSummary = {
  champs: ["malphite", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]].", 
        "R의 [[UNSTOPPABLE]]로 볼리베어 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Volibear's Q [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 말파이트 R의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
