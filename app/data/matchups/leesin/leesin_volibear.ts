// app/data/matchups/leesin/leesin_volibear.ts
import type { MatchupSummary } from "../_types";

export const leesin_volibear: MatchupSummary = {
  champs: ["leesin", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leesin: {
      ko: ["R의 [[KNOCKBACK]], [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 리 신 Q2, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 리 신 R의 [[KNOCKBACK]], [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
