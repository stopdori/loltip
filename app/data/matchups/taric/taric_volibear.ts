// app/data/matchups/taric/taric_volibear.ts
import type { MatchupSummary } from "../_types";

export const taric_volibear: MatchupSummary = {
  champs: ["taric", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    taric: {
      ko: ["E의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 타릭 E의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
