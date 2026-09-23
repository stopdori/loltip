// app/data/matchups/quinn/quinn_rakan.ts
import type { MatchupSummary } from "../_types";

export const quinn_rakan: MatchupSummary = {
  champs: ["quinn", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    quinn: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 퀸 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
