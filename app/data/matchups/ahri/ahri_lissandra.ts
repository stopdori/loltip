// app/data/matchups/ahri/ahri_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ahri_lissandra: MatchupSummary = {
  champs: ["ahri", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아리 R의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "아리 E의 [[CHARM]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Ahri's R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Ahri's R [[DASH]]. [[EXIST]]", 
        "When hit by Ahri's E [[CHARM]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
