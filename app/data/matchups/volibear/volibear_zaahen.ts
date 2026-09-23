// app/data/matchups/volibear/volibear_zaahen.ts
import type { MatchupSummary } from "../_types";

export const volibear_zaahen: MatchupSummary = {
  champs: ["volibear", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    volibear: {
      ko: ["Q의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 자헨 Q2의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음. [[EXIST]]"],
      en: [""],
    },
    zaahen: {
      ko: ["Q2의 [[AIRBORNE]], W의 [[GRAB]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [],
    },
  },
};
