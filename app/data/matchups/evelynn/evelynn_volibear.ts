// app/data/matchups/evelynn/evelynn_volibear.ts
import type { MatchupSummary } from "../_types";

export const evelynn_volibear: MatchupSummary = {
  champs: ["evelynn", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CHARM]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["W [[CHARM]] can interrupt Volibear's Q [[DASH]].",
        "W [[CHARM]] can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 이블린 W의 [[CHARM]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
