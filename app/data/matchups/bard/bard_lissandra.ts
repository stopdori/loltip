// app/data/matchups/bard/bard_lissandra.ts
import type { MatchupSummary } from "../_types";

export const bard_lissandra: MatchupSummary = {
  champs: ["bard", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
