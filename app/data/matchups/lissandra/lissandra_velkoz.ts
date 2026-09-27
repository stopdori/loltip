// app/data/matchups/lissandra/lissandra_velkoz.ts
import type { MatchupSummary } from "../_types";

export const lissandra_velkoz: MatchupSummary = {
  champs: ["lissandra", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "벨코즈 E의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Vel'Koz's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "When hit by Vel'Koz's E [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
