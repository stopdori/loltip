// app/data/matchups/lissandra/lissandra_udyr.ts
import type { MatchupSummary } from "../_types";

export const lissandra_udyr: MatchupSummary = {
  champs: ["lissandra", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 우디르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 우디르 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "우디르 E의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Udyr's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Udyr's E [[DASH]]. [[EXIST]]", 
        "When hit by Udyr's E [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
