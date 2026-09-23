// app/data/matchups/chogath/chogath_volibear.ts
import type { MatchupSummary } from "../_types";

export const chogath_volibear: MatchupSummary = {
  champs: ["chogath", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 W의 [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
