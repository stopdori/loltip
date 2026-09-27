// app/data/matchups/lissandra/lissandra_reksai.ts
import type { MatchupSummary } from "../_types";

export const lissandra_reksai: MatchupSummary = {
  champs: ["lissandra", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "렉사이 매복폼 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Rek'Sai's Burrowed Form E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Rek'Sai's Burrowed Form E [[DASH]]. [[EXIST]]", 
        "When hit by Rek'Sai's Burrowed Form W [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
