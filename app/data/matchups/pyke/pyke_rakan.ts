// app/data/matchups/pyke/pyke_rakan.ts
import type { MatchupSummary } from "../_types";

export const pyke_rakan: MatchupSummary = {
  champs: ["pyke", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    pyke: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]], R의 [[CHARM]]으로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[AIRBORNE]]으로 파이크 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 파이크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
