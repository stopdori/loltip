// app/data/matchups/evelynn/evelynn_lissandra.ts
import type { MatchupSummary } from "../_types";

export const evelynn_lissandra: MatchupSummary = {
  champs: ["evelynn", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "이블린 W의 [[CHARM]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
