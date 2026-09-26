// app/data/matchups/lissandra/lissandra_warwick.ts
import type { MatchupSummary } from "../_types";

export const lissandra_warwick: MatchupSummary = {
  champs: ["lissandra", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "워윅 E의 [[FEAR]], R의 [[SUPPRESS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
