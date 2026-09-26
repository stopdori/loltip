// app/data/matchups/lissandra/lissandra_thresh.ts
import type { MatchupSummary } from "../_types";

export const lissandra_thresh: MatchupSummary = {
  champs: ["lissandra", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "쓰레쉬 Q의 [[STUN]], [[GRAB]] / E의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
