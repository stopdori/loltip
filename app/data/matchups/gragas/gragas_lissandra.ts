// app/data/matchups/gragas/gragas_lissandra.ts
import type { MatchupSummary } from "../_types";

export const gragas_lissandra: MatchupSummary = {
  champs: ["gragas", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 그라가스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "그라가스 E, R의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
