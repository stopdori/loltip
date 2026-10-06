// app/data/matchups/mel/mel_wukong.ts
import type { MatchupSummary } from "../_types";

export const mel_wukong: MatchupSummary = {
  champs: ["mel", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 오공 평타, Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 오공 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Wukong's basic attacks, Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Wukong's W and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
