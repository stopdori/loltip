// app/data/matchups/lissandra/lissandra_shen.ts
import type { MatchupSummary } from "../_types";

export const lissandra_shen: MatchupSummary = {
  champs: ["lissandra", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 쉔 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R의 [[STUN]]의 [[KNOCKDOWN]]으로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[STUN]]의 [[KNOCKDOWN]]으로 쉔 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "쉔 E의 [[TAUNT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Shen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] and R [[STUN]]'s [[KNOCKDOWN]] can interrupt Shen's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Shen's E [[DASH]]. [[EXIST]]", 
        "When hit by Shen's E [[TAUNT]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
