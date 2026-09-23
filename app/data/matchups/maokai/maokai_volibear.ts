// app/data/matchups/maokai/maokai_volibear.ts
import type { MatchupSummary } from "../_types";

export const maokai_volibear: MatchupSummary = {
  champs: ["maokai", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    maokai: {
      ko: ["Q의 [[KNOCKBACK]] / W, R의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 마오카이 Q의 [[KNOCKBACK]] / W, R의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
