// app/data/matchups/mel/mel_renekton.ts
import type { MatchupSummary } from "../_types";

export const mel_renekton: MatchupSummary = {
  champs: ["mel", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 레넥톤 평타, 일반(Q, W, E), [[EMPOWERED]](Q, W, E), R([[AOE]] 피해)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 레넥톤 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Renekton's basic attacks, normal (Q, W, E), [[EMPOWERED]] (Q, W, E), or R ([[AOE]] damage). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Renekton's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
