// app/data/matchups/lissandra/lissandra_wukong.ts
import type { MatchupSummary } from "../_types";

export const lissandra_wukong: MatchupSummary = {
  champs: ["lissandra", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 오공 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 오공 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "오공 R의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
