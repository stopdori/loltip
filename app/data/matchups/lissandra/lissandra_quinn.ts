// app/data/matchups/lissandra/lissandra_quinn.ts
import type { MatchupSummary } from "../_types";

export const lissandra_quinn: MatchupSummary = {
  champs: ["lissandra", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]]으로 퀸 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 퀸 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[ROOT]], R의 [[STUN]]로 퀸 R의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
      "퀸 E의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Quinn's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] can interrupt Quinn's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Quinn's E [[DASH]] and R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "W [[ROOT]] and R [[STUN]] can cancel Quinn's R [[TRANSFORM]]. [[EXIST]]", 
        "When hit by Quinn's E [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
