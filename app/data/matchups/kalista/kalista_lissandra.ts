// app/data/matchups/kalista/kalista_lissandra.ts
import type { MatchupSummary } from "../_types";

export const kalista_lissandra: MatchupSummary = {
  champs: ["kalista", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kalista: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 칼리스타 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "칼리스타 R2의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Kalista's P [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Kalista's P [[DASH]]. [[EXIST]]", 
        "When hit by Kalista's R2 [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
