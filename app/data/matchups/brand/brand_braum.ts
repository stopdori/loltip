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
      ko: ["브랜드 Q의 [[STUN]]로 브라움 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Braum's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    braum: {
      ko: ["브라움 E(방패)로 브랜드 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 브랜드 평타, Q, E(강화)를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\nR은 방패에 튕겨도 사라지지 않음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Brand's basic attacks, Q, W, E and R", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Brand's basic attacks, Q and E (enhanced)\\nR does not disappear even when blocked by the shield"],
    },
  },
};
