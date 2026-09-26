// app/data/matchups/fiora/fiora_lissandra.ts
import type { MatchupSummary } from "../_types";

export const fiora_lissandra: MatchupSummary = {
  champs: ["fiora", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiora: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 피오라 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "피오라 W의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
