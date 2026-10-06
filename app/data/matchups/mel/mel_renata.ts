// app/data/matchups/mel/mel_renata.ts
import type { MatchupSummary } from "../_types";

export const mel_renata: MatchupSummary = {
  champs: ["mel", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 레나타 글라스크 평타, Q, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 멜이 Q를 [[REFLECT]]하고 Q2를 사용할 수 없음.", 
        "W의 [[REFLECT]]로 레나타 글라스크 Q2(충돌 효과)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Renata Glasc's basic attacks, Q, E, and R [[PROJECTILE]]. [[EXIST]] \n However, after Mel [[REFLECT]]s Q, she cannot use Q2.", 
        "W [[REFLECT]] cannot [[REFLECT]] Renata Glasc's Q2 (collision effect). [[NOT_EXIST]]"],
    },
    renata: {
      ko: [],
      en: [],
    },
  },
};
