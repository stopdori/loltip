// app/data/matchups/ivern/ivern_volibear.ts
import type { MatchupSummary } from "../_types";

export const ivern_volibear: MatchupSummary = {
  champs: ["ivern", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ivern: {
      ko: ["Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 아이번 Q2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 아이번 Q1의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 Q1의 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
