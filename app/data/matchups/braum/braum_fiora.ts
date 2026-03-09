// app/data/matchups/braum/braum_fiora.ts
import type { MatchupSummary } from "../_types";

export const braum_fiora: MatchupSummary = {
  champs: ["braum", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 피오라 평타, Q, E를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n피오라 P는 브라움에게 발동될 때 평타나 다른 스킬의 데미지를 무효화하고 P의 데미지는 감소 없이 적용.", "브라움 P의 [[STUN]]로 피오라 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 피오라 Q를 끊을 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Fiora's basic attacks, Q, and E\\nFiora's P nullifies basic attack and skill damage when triggered on Braum, but P's own damage applies without reduction", "Braum's P [[STUN]] cannot interrupt Fiora's Q. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Fiora's Q"],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
