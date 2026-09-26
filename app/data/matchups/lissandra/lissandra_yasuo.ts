// app/data/matchups/lissandra/lissandra_yasuo.ts
import type { MatchupSummary } from "../_types";

export const lissandra_yasuo: MatchupSummary = {
  champs: ["lissandra", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]], R의 [[STUN]]로 야스오 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "야스오 Q3, R의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
    yasuo: {
      ko: ["W의 [[WINDSHIELD]]으로 리산드라 Q, E의 [[PROJECTILE]]를 막을 수 있음."],
      en: [],
    },
  },
};
