// app/data/matchups/leesin/leesin_lissandra.ts
import type { MatchupSummary } from "../_types";

export const leesin_lissandra: MatchupSummary = {
  champs: ["leesin", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leesin: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 리 신 Q2, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 리 신 Q2, W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "리 신 R의 [[KNOCKBACK]], [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Lee Sin's Q2 and W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Lee Sin's Q2 and W [[DASH]]. [[EXIST]]", 
        "When hit by Lee Sin's R [[KNOCKBACK]] or [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
