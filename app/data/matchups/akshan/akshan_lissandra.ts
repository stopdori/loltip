// app/data/matchups/akshan/akshan_lissandra.ts
import type { MatchupSummary } from "../_types";

export const akshan_lissandra: MatchupSummary = {
  champs: ["akshan", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[ROOT]]으로 아크샨 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]]", 
        "R의 [[STUN]]로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "아크샨 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
