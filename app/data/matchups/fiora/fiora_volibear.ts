// app/data/matchups/fiora/fiora_volibear.ts
import type { MatchupSummary } from "../_types";

export const fiora_volibear: MatchupSummary = {
  champs: ["fiora", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiora: {
      ko: ["W의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 피오라 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 피오라 W의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
