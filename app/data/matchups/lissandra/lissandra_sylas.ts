// app/data/matchups/lissandra/lissandra_sylas.ts
import type { MatchupSummary } from "../_types";

export const lissandra_sylas: MatchupSummary = {
  champs: ["lissandra", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "사일러스 E2의 [[AIRBORNE]], R(리산드라 강탈)의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Sylas's W, E1, and E2 [[DASH]]. [[EXIST]]", 
        "When hit by Sylas's E2 [[AIRBORNE]] or R (stolen Lissandra R) [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
