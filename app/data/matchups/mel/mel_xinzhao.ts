// app/data/matchups/mel/mel_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const mel_xinzhao: MatchupSummary = {
  champs: ["mel", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 신 짜오 평타, Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 신 짜오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Xin Zhao's basic attacks, Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Xin Zhao's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
