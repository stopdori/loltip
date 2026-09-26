// app/data/matchups/irelia/irelia_lissandra.ts
import type { MatchupSummary } from "../_types";

export const irelia_lissandra: MatchupSummary = {
  champs: ["irelia", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    irelia: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "이렐리아 E의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
