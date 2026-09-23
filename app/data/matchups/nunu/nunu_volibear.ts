// app/data/matchups/nunu/nunu_volibear.ts
import type { MatchupSummary } from "../_types";

export const nunu_volibear: MatchupSummary = {
  champs: ["nunu", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    nunu: {
      ko: ["W의 [[AIRBORNE]], E의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
