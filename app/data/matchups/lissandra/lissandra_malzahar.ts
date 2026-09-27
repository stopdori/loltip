// app/data/matchups/lissandra/lissandra_malzahar.ts
import type { MatchupSummary } from "../_types";

export const lissandra_malzahar: MatchupSummary = {
  champs: ["lissandra", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Malzahar's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Malzahar's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "When hit by Malzahar's Q [[SILENCE]] or R [[SUPPRESS]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    malzahar: {
      ko: [],
      en: [],
    },
  },
};
