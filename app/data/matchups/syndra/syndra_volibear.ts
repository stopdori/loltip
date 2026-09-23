// app/data/matchups/syndra/syndra_volibear.ts
import type { MatchupSummary } from "../_types";

export const syndra_volibear: MatchupSummary = {
  champs: ["syndra", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    syndra: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 신드라 E의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
