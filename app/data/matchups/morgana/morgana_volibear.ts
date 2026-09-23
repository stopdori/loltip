// app/data/matchups/morgana/morgana_volibear.ts
import type { MatchupSummary } from "../_types";

export const morgana_volibear: MatchupSummary = {
  champs: ["morgana", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    morgana: {
      ko: ["Q의 [[ROOT]], R의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 모르가나 Q의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
