// app/data/matchups/brand/brand_volibear.ts
import type { MatchupSummary } from "../_types";

export const brand_volibear: MatchupSummary = {
  champs: ["brand", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Brand's Q [[STUN]] can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q has [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 브랜드 Q의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
