// app/data/matchups/draven/draven_mel.ts
import type { MatchupSummary } from "../_types";

export const draven_mel: MatchupSummary = {
  champs: ["draven", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    draven: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 드레이븐 평타, Q, E, R1, R2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, R2를 [[REFLECT]]하면 멜에게 바로 흡수."],
      en: ["W [[REFLECT]] can [[REFLECT]] Draven's basic attacks, Q, E, R1, and R2 [[PROJECTILE]]. [[EXIST]] \n However, if R2 is [[REFLECT]]ed, it is immediately absorbed by Mel."],
    },
  },
};
