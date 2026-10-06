// app/data/matchups/mel/mel_rammus.ts
import type { MatchupSummary } from "../_types";

export const mel_rammus: MatchupSummary = {
  champs: ["mel", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 람머스 평타, Q, E, R(일반, [[EMPOWERED]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]"
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Rammus's basic attacks, Q, E, or R (normal, [[EMPOWERED]]). [[NOT_EXIST]]", 
        "E [[ROOT]] can cancel Rammus's Q [[TRANSFORM]]. [[EXIST]]"],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
