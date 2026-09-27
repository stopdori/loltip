// app/data/matchups/lissandra/lissandra_nautilus.ts
import type { MatchupSummary } from "../_types";

export const lissandra_nautilus: MatchupSummary = {
  champs: ["lissandra", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Nautilus's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Nautilus's Q [[DASH]]. [[EXIST]]", 
        "When hit by Nautilus's P [[ROOT]], Q [[GRAB]], or R [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
