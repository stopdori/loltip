// app/data/matchups/fiddlesticks/fiddlesticks_volibear.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_volibear: MatchupSummary = {
  champs: ["fiddlesticks", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: ["P, Q의 [[FEAR]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 피들스틱 P, Q의 [[FEAR]]를 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]는 남아있음."],
      en: [],
    },
  },
};
