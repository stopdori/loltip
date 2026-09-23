// app/data/matchups/vayne/vayne_volibear.ts
import type { MatchupSummary } from "../_types";

export const vayne_volibear: MatchupSummary = {
  champs: ["vayne", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    vayne: {
      ko: ["E의 [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 베인 E의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
