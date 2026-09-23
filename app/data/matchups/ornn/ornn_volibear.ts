// app/data/matchups/ornn/ornn_volibear.ts
import type { MatchupSummary } from "../_types";

export const ornn_volibear: MatchupSummary = {
  champs: ["ornn", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ornn: {
      ko: ["P, E, R2의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 오른 P의 [[KNOCKBACK]] / Q([[TERRAIN]]), E, R2의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
