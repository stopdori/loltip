// app/data/matchups/sylas/sylas_volibear.ts
import type { MatchupSummary } from "../_types";

export const sylas_volibear: MatchupSummary = {
  champs: ["sylas", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    sylas: {
      ko: ["E2의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 사일러스 E2의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
