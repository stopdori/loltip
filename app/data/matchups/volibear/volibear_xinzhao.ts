// app/data/matchups/volibear/volibear_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const volibear_xinzhao: MatchupSummary = {
  champs: ["volibear", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    volibear: {
      ko: ["Q의 [[STUN]]로 신 짜오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 신 짜오 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [""],
    },
    xinzhao: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [],
    },
  },
};
