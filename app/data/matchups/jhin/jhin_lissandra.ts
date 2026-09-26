// app/data/matchups/jhin/jhin_lissandra.ts
import type { MatchupSummary } from "../_types";

export const jhin_lissandra: MatchupSummary = {
  champs: ["jhin", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jhin: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 진 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R의 [[STUN]]로 진 W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "진 W의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
