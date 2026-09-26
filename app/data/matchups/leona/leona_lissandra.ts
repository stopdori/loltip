// app/data/matchups/leona/leona_lissandra.ts
import type { MatchupSummary } from "../_types";

export const leona_lissandra: MatchupSummary = {
  champs: ["leona", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leona: {
      ko: ["W의 [[ROOT]]으로 레오나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 레오나 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "레오나 Q, R의 [[STUN]] / E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
