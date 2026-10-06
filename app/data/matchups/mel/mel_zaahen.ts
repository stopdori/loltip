// app/data/matchups/mel/mel_zaahen.ts
import type { MatchupSummary } from "../_types";

export const mel_zaahen: MatchupSummary = {
  champs: ["mel", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 자헨 평타, Q1, Q2, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 자헨 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Zaahen's basic attacks, Q1, Q2, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Zaahen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    zaahen: {
      ko: [],
      en: [],
    },
  },
};
