// app/data/matchups/lissandra/lissandra_samira.ts
import type { MatchupSummary } from "../_types";

export const lissandra_samira: MatchupSummary = {
  champs: ["lissandra", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 사미라 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 사미라 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "사미라 P의 연계 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Samira's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Samira's E [[DASH]]. [[EXIST]]", 
        "When hit by Samira's P combo [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
