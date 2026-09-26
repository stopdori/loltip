// app/data/matchups/diana/diana_lissandra.ts
import type { MatchupSummary } from "../_types";

export const diana_lissandra: MatchupSummary = {
  champs: ["diana", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "다이애나 R의 [[GRAB]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
