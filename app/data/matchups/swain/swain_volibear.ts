// app/data/matchups/swain/swain_volibear.ts
import type { MatchupSummary } from "../_types";

export const swain_volibear: MatchupSummary = {
  champs: ["swain", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    swain: {
      ko: ["E1의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 스웨인 E의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음. \n 단, 스웨인 E2 [[GRAB]]의 대상에서 제외."],
      en: [],
    },
  },
};
