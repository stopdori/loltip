// app/data/matchups/lissandra/lissandra_varus.ts
import type { MatchupSummary } from "../_types";

export const lissandra_varus: MatchupSummary = {
  champs: ["lissandra", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "바루스 R의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
