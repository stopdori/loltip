// app/data/matchups/viktor/viktor_volibear.ts
import type { MatchupSummary } from "../_types";

export const viktor_volibear: MatchupSummary = {
  champs: ["viktor", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    viktor: {
      ko: ["W의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]].", 
        "R의 [[DISRUPT]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 없음. [[NOT_EXIST]]"
      ],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 빅토르 W의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
