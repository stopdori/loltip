// app/data/matchups/braum/braum_camille.ts
import type { MatchupSummary } from "../_types";

export const braum_camille: MatchupSummary = {
  champs: ["braum", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카밀 평타, Q1, Q2, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, E(방패)의 [[STUN]]은 남아있음.", "브라움 P의 [[STUN]]로 카밀 E을 끊을 수 없음. 단, [[STUN]]은 남아있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Camille's basic attacks, Q1, Q2, W, E and R", "Braum's P [[STUN]] cannot interrupt Camille's E. However, [[STUN]] still applies."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
