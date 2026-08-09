// app/data/matchups/anivia/anivia_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const anivia_jarvaniv: MatchupSummary = {
  champs: ["anivia", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
