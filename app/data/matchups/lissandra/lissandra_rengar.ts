// app/data/matchups/lissandra/lissandra_rengar.ts
import type { MatchupSummary } from "../_types";

export const lissandra_rengar: MatchupSummary = {
  champs: ["lissandra", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 렝가 P, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "렝가 [[EMPOWERED]] E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
