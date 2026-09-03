// app/data/matchups/hecarim/hecarim_volibear.ts
import type { MatchupSummary } from "../_types";

export const hecarim_volibear: MatchupSummary = {
  champs: ["hecarim", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]].",
        "R의 [[UNSTOPPABLE]]로 볼리베어 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q [[CDR_RESET]]."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
