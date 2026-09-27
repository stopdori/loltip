// app/data/matchups/lissandra/lissandra_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const lissandra_tahmkench: MatchupSummary = {
  champs: ["lissandra", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]], R의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]], R의 [[SUPPRESS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] and R [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]]. [[EXIST]]", 
        "When hit by Tahm Kench's Q [[STUN]], W [[AIRBORNE]], or R [[SUPPRESS]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
