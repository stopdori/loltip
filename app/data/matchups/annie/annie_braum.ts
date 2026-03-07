// app/data/matchups/annie/annie_braum.ts
import type { MatchupSummary } from "../_types";

export const annie_braum: MatchupSummary = {
  champs: ["annie", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 애니 평타, Q, W, R를 막을([[DAMAGE_NULLIFY]]) 수 있음\n 단, 애니 P의 [[STUN]]은 유효", "브라움 E(방패)로 애니 평타, Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Annie's basic attacks, Q, W and R\\nHowever, Annie's P [[STUN]] still applies", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Annie's basic attacks and Q"],
    },
  },
};
