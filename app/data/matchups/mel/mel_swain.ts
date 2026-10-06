// app/data/matchups/mel/mel_swain.ts
import type { MatchupSummary } from "../_types";

export const mel_swain: MatchupSummary = {
  champs: ["mel", "swain"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 스웨인 평타, E1의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E2는 발동하지 않음.", 
        "W의 [[REFLECT]]로 스웨인 Q, W, E2, R1, R2을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Swain's basic attacks and E1 [[PROJECTILE]]. [[EXIST]] \n However, E2 does not trigger.", 
        "W [[REFLECT]] cannot [[REFLECT]] Swain's Q, W, E2, R1, or R2. [[NOT_EXIST]]"],
    },
    swain: {
      ko: [],
      en: [],
    },
  },
};
