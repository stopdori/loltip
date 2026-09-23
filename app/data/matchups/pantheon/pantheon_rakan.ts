// app/data/matchups/pantheon/pantheon_rakan.ts
import type { MatchupSummary } from "../_types";

export const pantheon_rakan: MatchupSummary = {
  champs: ["pantheon", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    pantheon: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 판테온 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
