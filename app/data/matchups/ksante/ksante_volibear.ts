// app/data/matchups/ksante/ksante_volibear.ts
import type { MatchupSummary } from "../_types";

export const ksante_volibear: MatchupSummary = {
  champs: ["ksante", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ksante: {
      ko: ["W의 [[KNOCKBACK]], R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]], R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
