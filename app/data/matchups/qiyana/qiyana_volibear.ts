// app/data/matchups/qiyana/qiyana_volibear.ts
import type { MatchupSummary } from "../_types";

export const qiyana_volibear: MatchupSummary = {
  champs: ["qiyana", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    qiyana: {
      ko: ["물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 키아나 물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 물Q의 [[ROOT]], R의 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
