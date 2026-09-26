// app/data/matchups/belveth/belveth_lissandra.ts
import type { MatchupSummary } from "../_types";

export const belveth_lissandra: MatchupSummary = {
  champs: ["belveth", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 리산드라 W의 [[ROOT]], R의 [[STUN]]로 끊기지 않음. \n 단, [[ROOT]], [[STUN]]은 남아있음."],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "벨베스 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
