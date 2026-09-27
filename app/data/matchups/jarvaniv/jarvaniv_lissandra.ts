// app/data/matchups/jarvaniv/jarvaniv_lissandra.ts
import type { MatchupSummary } from "../_types";

export const jarvaniv_lissandra: MatchupSummary = {
  champs: ["jarvaniv", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jarvaniv: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "자르반 EQ(깃창), R([[TERRAIN]])의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]. [[EXIST]]", 
        "When hit by Jarvan IV's EQ (flag-toss combo) or R ([[TERRAIN]]) [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
