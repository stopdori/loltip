// app/data/matchups/volibear/volibear_xerath.ts
import type { MatchupSummary } from "../_types";

export const volibear_xerath: MatchupSummary = {
  champs: ["volibear", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    volibear: {
      ko: ["Q의 [[STUN]]로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 제라스 E의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [""],
    },
    xerath: {
      ko: ["E의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [],
    },
  },
};
