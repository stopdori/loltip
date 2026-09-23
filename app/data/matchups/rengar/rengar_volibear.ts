// app/data/matchups/rengar/rengar_volibear.ts
import type { MatchupSummary } from "../_types";

export const rengar_volibear: MatchupSummary = {
  champs: ["rengar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    rengar: {
      ko: ["[[EMPOWERED]] E의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 렝가 [[EMPOWERED]] E의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
