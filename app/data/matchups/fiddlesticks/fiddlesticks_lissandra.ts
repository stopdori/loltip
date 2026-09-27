// app/data/matchups/fiddlesticks/fiddlesticks_lissandra.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_lissandra: MatchupSummary = {
  champs: ["fiddlesticks", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 피들스틱 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]]으로 피들스틱 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[STUN]]로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "피들스틱 P, Q의 [[FEAR]]를 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Fiddlesticks's W [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] can interrupt Fiddlesticks's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "R [[STUN]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "When hit by Fiddlesticks's P or Q [[FEAR]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
