// app/data/matchups/diana/diana_volibear.ts
import type { MatchupSummary } from "../_types";

export const diana_volibear: MatchupSummary = {
  champs: ["diana", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["R [[GRAB]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 다이애나 R의 [[GRAB]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
