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
      ko: ["바드 Q의 [[STUN]], R(존야)의 [[STASIS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Q [[STUN]] and R (like Zhonya's Hourglass) [[STASIS]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. [[EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 Q의 [[STUN]]은 남아있음."],
      en: ["Volibear's R [[UNSTOPPABLE]] [[DASH]] can bypass Bard's R (Zhonya's)."],
    },
  },
};
