// app/data/matchups/lillia/lillia_volibear.ts
import type { MatchupSummary } from "../_types";

export const lillia_volibear: MatchupSummary = {
  champs: ["lillia", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lillia: {
      ko: ["R의 [[SLEEP]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 릴리아 R의 [[SLEEP]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
