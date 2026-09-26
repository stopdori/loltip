// app/data/matchups/lissandra/lissandra_pantheon.ts
import type { MatchupSummary } from "../_types";

export const lissandra_pantheon: MatchupSummary = {
  champs: ["lissandra", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 판테온 W의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "판테온 W의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
