// app/data/matchups/pyke/pyke_volibear.ts
import type { MatchupSummary } from "../_types";

export const pyke_volibear: MatchupSummary = {
  champs: ["pyke", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    pyke: {
      ko: ["Q의 [[GRAB]], E의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "Q의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 E의 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
