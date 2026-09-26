// app/data/matchups/lissandra/lissandra_nunu.ts
import type { MatchupSummary } from "../_types";

export const lissandra_nunu: MatchupSummary = {
  champs: ["lissandra", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]], R의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "W의 [[ROOT]]으로 누누와 월럼프 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
      "누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
