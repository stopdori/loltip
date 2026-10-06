// app/data/matchups/mel/mel_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const mel_tryndamere: MatchupSummary = {
  champs: ["mel", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 트린다미어 평타, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 트린다미어 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Tryndamere's basic attacks, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Tryndamere's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
