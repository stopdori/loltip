// app/data/matchups/twistedfate/twistedfate_volibear.ts
import type { MatchupSummary } from "../_types";

export const twistedfate_volibear: MatchupSummary = {
  champs: ["twistedfate", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    twistedfate: {
      ko: ["W(골카)의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 트위스티드 페이트 W(골카)의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
