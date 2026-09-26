// app/data/matchups/lissandra/lissandra_zac.ts
import type { MatchupSummary } from "../_types";

export const lissandra_zac: MatchupSummary = {
  champs: ["lissandra", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 자크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R의 [[STUN]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "자크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
