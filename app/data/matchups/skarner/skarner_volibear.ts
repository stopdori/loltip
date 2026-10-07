// app/data/matchups/skarner/skarner_volibear.ts
import type { MatchupSummary } from "../_types";

export const skarner_volibear: MatchupSummary = {
  champs: ["skarner", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    skarner: {
      ko: ["E, R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[UNSTOPPABLE]]로 스카너 E, R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]"],
      en: ["Q [[STUN]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[UNSTOPPABLE]] can ignore Skarner's E and R [[SUPPRESS]]. [[EXIST]]"],
    },
  },
};
