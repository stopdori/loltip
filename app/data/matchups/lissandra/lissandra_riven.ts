// app/data/matchups/lissandra/lissandra_riven.ts
import type { MatchupSummary } from "../_types";

export const lissandra_riven: MatchupSummary = {
  champs: ["lissandra", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "리븐 Q3의 [[AIRBORNE]], W의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Riven's Q and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Riven's Q and E [[DASH]]. [[EXIST]]", 
        "When hit by Riven's Q3 [[AIRBORNE]] or W [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
