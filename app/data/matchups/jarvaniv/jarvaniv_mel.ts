// app/data/matchups/jarvaniv/jarvaniv_mel.ts
import type { MatchupSummary } from "../_types";

export const jarvaniv_mel: MatchupSummary = {
  champs: ["jarvaniv", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jarvaniv: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 자르반 평타(일반, [[EMPOWERED]]), Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 자르반 EQ(깃창)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Jarvan IV's basic attacks (normal, [[EMPOWERED]]), Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Jarvan IV's EQ (flag-toss combo) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
