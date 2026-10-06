// app/data/matchups/mel/mel_veigar.ts
import type { MatchupSummary } from "../_types";

export const mel_veigar: MatchupSummary = {
  champs: ["mel", "veigar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 베이가 평타, Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 베이가 W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Veigar's basic attacks, Q, and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Veigar's W or E. [[NOT_EXIST]]"],
    },
    veigar: {
      ko: [],
      en: [],
    },
  },
};
