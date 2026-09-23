// app/data/matchups/volibear/volibear_yone.ts
import type { MatchupSummary } from "../_types";

export const volibear_yone: MatchupSummary = {
  champs: ["volibear", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    volibear: {
      ko: ["Q의 [[STUN]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 요네 Q3, R의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: [""],
    },
    yone: {
      ko: ["Q3의 [[AIRBORNE]] / R의 [[STUN]], [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [],
    },
  },
};
