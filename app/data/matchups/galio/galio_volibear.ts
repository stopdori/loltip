// app/data/matchups/galio/galio_volibear.ts
import type { MatchupSummary } from "../_types";

export const galio_volibear: MatchupSummary = {
  champs: ["galio", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: ["W의 [[TAUNT]] / E, R의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 갈리오 W의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 W의 [[TAUNT]]은 남아있음."],
      en: [],
    },
  },
};
