// app/data/matchups/brand/brand_braum.ts
import type { MatchupSummary } from "../_types";

export const brand_braum: MatchupSummary = {
  champs: ["brand", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 브랜드 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 브랜드 평타, Q, E(강화)를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\nR은 방패에 튕겨도 사라지지 않음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Brand's basic attacks, Q, W, E and R", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Brand's basic attacks, Q and E (enhanced)\\nR does not disappear even when blocked by the shield"],
    },
  },
};
