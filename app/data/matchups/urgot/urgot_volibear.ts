// app/data/matchups/urgot/urgot_volibear.ts
import type { MatchupSummary } from "../_types";

export const urgot_volibear: MatchupSummary = {
  champs: ["urgot", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    urgot: {
      ko: ["E의 [[GRAB]], R2의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 우르곳 W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
