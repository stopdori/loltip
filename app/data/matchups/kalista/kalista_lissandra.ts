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
      en: [],
    },
  },
};
