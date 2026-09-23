// app/data/matchups/singed/singed_volibear.ts
import type { MatchupSummary } from "../_types";

export const singed_volibear: MatchupSummary = {
  champs: ["singed", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    singed: {
      ko: ["W의 [[GROUNDED]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 없음. [[NOT_EXIST]]", 
        "E의 [[GRAB]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."
      ],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 신지드 E의 [[GRAB]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
