// app/data/matchups/shaco/shaco_volibear.ts
import type { MatchupSummary } from "../_types";

export const shaco_volibear: MatchupSummary = {
  champs: ["shaco", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    shaco: {
      ko: ["W, R의 [[FEAR]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 샤코 W, R의 [[FEAR]]를 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]는 남아있음."
      ],
      en: [],
    },
  },
};
