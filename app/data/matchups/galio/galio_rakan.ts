// app/data/matchups/galio/galio_rakan.ts
import type { MatchupSummary } from "../_types";

export const galio_rakan: MatchupSummary = {
  champs: ["galio", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: [""],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 갈리오 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 갈리오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 갈리오 W의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 갈리오 W는 중단될 때 시전."],
      en: [],
    },
  },
};
