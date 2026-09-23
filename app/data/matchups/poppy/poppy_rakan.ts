// app/data/matchups/poppy/poppy_rakan.ts
import type { MatchupSummary } from "../_types";

export const poppy_rakan: MatchupSummary = {
  champs: ["poppy", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    poppy: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 뽀삐 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
