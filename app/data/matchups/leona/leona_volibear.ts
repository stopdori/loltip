// app/data/matchups/leona/leona_volibear.ts
import type { MatchupSummary } from "../_types";

export const leona_volibear: MatchupSummary = {
  champs: ["leona", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leona: {
      ko: ["Q, R의 [[STUN]] / E의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 레오나 Q, R의 [[STUN]] / E의 [[ROOT]] 을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
