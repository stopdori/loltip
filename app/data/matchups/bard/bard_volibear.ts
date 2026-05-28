// app/data/matchups/bard/bard_volibear.ts
import type { MatchupSummary } from "../_types";

export const bard_volibear: MatchupSummary = {
  champs: ["bard", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음.  \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Bard's Q [[STUN]] and R (Zhonya's) can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q has [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["볼리베어 R의 [[UNSTOPPABLE]] [[DASH]]으로 바드 R(존야)을 무시할 수 있음."],
      en: ["Volibear's R [[UNSTOPPABLE]] [[DASH]] can bypass Bard's R (Zhonya's)."],
    },
  },
};
