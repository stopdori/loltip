// app/data/matchups/blitzcrank/blitzcrank_smolder.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_smolder: MatchupSummary = {
  champs: ["blitzcrank", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["Q의 [[GRAB]], E의 [[AIRBORNE]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[SILENCE]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]]"],
      en: ["Q [[GRAB]] and E [[AIRBORNE]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[SILENCE]] cannot interrupt Smolder's E [[IGNORE_TERRAIN]]. [[NOT_EXIST]]"],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
