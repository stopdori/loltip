// app/data/matchups/braum/braum_draven.ts
import type { MatchupSummary } from "../_types";

export const braum_draven: MatchupSummary = {
  champs: ["braum", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 드레이븐 평타, Q(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 드레이븐 평타, Q(평타), E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 드레이븐 E는 브라움 E(방패)에 닿는 즉시 투사체가 삭제 되지만, E의 [[SLOW]] [[KNOCKBACK]]은 적용"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Draven's basic attacks, Q (basic attacks), E and R", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Draven's basic attacks, Q (basic attacks), E and R.\nHowever, Draven's E projectile is deleted on contact with Braum's E(Shield), but E's [[SLOW]] and [[KNOCKBACK]] still apply."],
    },
    draven: {
      ko: [],
      en: [],
    },
  },
};
