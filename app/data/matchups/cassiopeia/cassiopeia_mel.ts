// app/data/matchups/cassiopeia/cassiopeia_mel.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_mel: MatchupSummary = {
  champs: ["cassiopeia", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카시오페아 평타, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 카시오페아 Q, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Cassiopeia's basic attacks, W, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Cassiopeia's Q or R. [[NOT_EXIST]]"],
    },
  },
};
