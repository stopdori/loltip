// app/data/matchups/braum/braum_jinx.ts
import type { MatchupSummary } from "../_types";

export const braum_jinx: MatchupSummary = {
  champs: ["braum", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 징크스 Q(머신건), Q(로켓), W, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 징크스 R은 브라움에게 피해는 전혀 없지만 주변 범위데미지는 아군에게 적용\n단, E는 피해를 막을 수 없음", "브라움 E(방패)로 징크스 Q(머신건), Q(로켓), W, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, E는 사라지지 않고 브라움 방패에 막혀 바닥에 깔림"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Jinx's Q (Minigun), Q (Rocket), W and R.\nHowever, Jinx's R deals no damage to Braum, but the surrounding AoE damage still applies to allies.\nHowever, E damage cannot be blocked.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Jinx's Q (Minigun), Q (Rocket), W, E and R.\nHowever, E does not disappear — it is stopped by the shield and lands on the ground."],
    },
    jinx: {
      ko: [],
      en: [],
    },
  },
};
