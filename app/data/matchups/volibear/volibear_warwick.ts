// app/data/matchups/volibear/volibear_warwick.ts
import type { MatchupSummary } from "../_types";

export const volibear_warwick: MatchupSummary = {
  champs: ["volibear", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    volibear: {
      ko: ["Q의 [[STUN]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 E의 [[FEAR]]는 남아있음."],
      en: [""],
    },
    warwick: {
      ko: ["E의 [[FEAR]], R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [],
    },
  },
};
