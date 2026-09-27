// app/data/matchups/lissandra/lissandra_viego.ts
import type { MatchupSummary } from "../_types";

export const lissandra_viego: MatchupSummary = {
  champs: ["lissandra", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 비에고 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]]으로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 비에고 W의 [[DASH]], [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "비에고 W의 [[STUN]], R의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Viego's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] can interrupt Viego's W [[SKILL_CHARGED]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Viego's W [[DASH]] and [[SKILL_CHARGED]]. [[EXIST]]", 
        "When hit by Viego's W [[STUN]] or R [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
