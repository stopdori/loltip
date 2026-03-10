// app/data/matchups/braum/braum_kogmaw.ts
import type { MatchupSummary } from "../_types";

export const braum_kogmaw: MatchupSummary = {
  champs: ["braum", "kogmaw"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 코그모 평타, Q, W(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 코그모 R은 중심방향을 바라봐야 적용.", "브라움 E(방패)로 코그모 평타, Q, W(평타), E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 코그모 E는 브라움 E(방패)에 막힐 때 즉시 이동을 멈춤"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kog'Maw's basic attacks, Q, W (basic attacks), E and R.\nHowever, R only applies when facing toward the center.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kog'Maw's basic attacks, Q, W (basic attacks) and E.\nHowever, Kog'Maw's E stops immediately upon contact with Braum's E(Shield)."],
    },
    kogmaw: {
      ko: [],
      en: [],
    },
  },
};
