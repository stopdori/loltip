// app/data/matchups/leblanc/leblanc_lissandra.ts
import type { MatchupSummary } from "../_types";

export const leblanc_lissandra: MatchupSummary = {
  champs: ["leblanc", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leblanc: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 르블랑 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "르블랑 E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt LeBlanc's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt LeBlanc's W [[DASH]]. [[EXIST]]", 
        "When hit by LeBlanc's E [[ROOT]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
