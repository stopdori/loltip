// app/data/matchups/lucian/lucian_rakan.ts
import type { MatchupSummary } from "../_types";

export const lucian_rakan: MatchupSummary = {
  champs: ["lucian", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lucian: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 루시안 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 루시안 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
