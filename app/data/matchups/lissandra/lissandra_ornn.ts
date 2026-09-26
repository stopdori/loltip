// app/data/matchups/lissandra/lissandra_ornn.ts
import type { MatchupSummary } from "../_types";

export const lissandra_ornn: MatchupSummary = {
  champs: ["lissandra", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 오른 E, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "오른 P, Q([[TERRAIN]]), R의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
