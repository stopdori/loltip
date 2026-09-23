// app/data/matchups/azir/azir_volibear.ts
import type { MatchupSummary } from "../_types";

export const azir_volibear: MatchupSummary = {
  champs: ["azir", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Azir's R [[KNOCKBACK]] can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q has [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 아지르 R의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
