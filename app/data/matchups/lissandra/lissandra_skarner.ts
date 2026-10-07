// app/data/matchups/lissandra/lissandra_skarner.ts
import type { MatchupSummary } from "../_types";

export const lissandra_skarner: MatchupSummary = {
  champs: ["lissandra", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]], R의 [[STUN]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "스카너 E의 [[KNOCKBACK]], [[STUN]] / R의 [[SUPPRESS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] and R [[STUN]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "When hit by Skarner's E [[KNOCKBACK]], [[STUN]] / R [[SUPPRESS]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
