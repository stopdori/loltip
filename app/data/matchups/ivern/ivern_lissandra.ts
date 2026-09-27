// app/data/matchups/ivern/ivern_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ivern_lissandra: MatchupSummary = {
  champs: ["ivern", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ivern: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아이번 Q2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아이번 Q2의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Ivern's Q2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Ivern's Q2 [[DASH]]. [[EXIST]]", 
        "When hit by Ivern's Q [[ROOT]] or the 3rd [[BA]] [[AIRBORNE]] of Daisy [[SUMMON]]ed by R, Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
