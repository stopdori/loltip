// app/data/matchups/fizz/fizz_lissandra.ts
import type { MatchupSummary } from "../_types";

export const fizz_lissandra: MatchupSummary = {
  champs: ["fizz", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fizz: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 피즈 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "피즈 R의 [[AIRBORNE]], [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Fizz's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Fizz's Q [[DASH]]. [[EXIST]]", 
        "When hit by Fizz's R [[AIRBORNE]] or [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
