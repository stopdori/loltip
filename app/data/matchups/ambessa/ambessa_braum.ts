// app/data/matchups/ambessa/ambessa_braum.ts
import type { MatchupSummary } from "../_types";

export const ambessa_braum: MatchupSummary = {
  champs: ["ambessa", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 암베사 평타, Q1, Q2, W, E를 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 암베사 R의 데미지를 막을 수 없음 (방향과 관계없이 불가)"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Ambessa's basic attacks, Q1, Q2, W, and E", "Braum's E(Shield) cannot block Ambessa's R (regardless of direction)"],
    },
  },
};
