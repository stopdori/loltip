// app/data/matchups/sion/sion_volibear.ts
import type { MatchupSummary } from "../_types";

export const sion_volibear: MatchupSummary = {
  champs: ["sion", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    sion: {
      ko: ["Q, R의 [[AIRBORNE]], [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 사이온 Q, R의 [[AIRBORNE]], [[STUN]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
