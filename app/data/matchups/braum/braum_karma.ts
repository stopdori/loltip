// app/data/matchups/braum/braum_karma.ts
import type { MatchupSummary } from "../_types";

export const braum_karma: MatchupSummary = {
  champs: ["braum", "karma"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카르마 평타, Q, RQ, W, RW를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 카르마 RQ는 투사체 피격 피해를 막으면 바닥피해를 받을 수 있고, 바닥피해에 카르마 방향으로 방패를 들면 바닥피해를 무시.\n단, 카르마 W는 처음 걸릴때 브라움이 E(방패)를 들면 처음 피해만 무시. 나중에 [[TETHER]]효과 발동할 때 들면 [[TETHER]]데미지만 무시", "브라움 E(방패)로 카르마 평타, Q, RQ를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 카르마 RQ는 브라움 E(방패)에 닿으면 즉시 이동을 멈추고 바닥에 깔림."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Karma's basic attacks, Q, RQ, W and RW.\nHowever, if Karma's RQ projectile hit is blocked, the ground detonation can still deal damage — facing toward Karma while raising the shield will also block the ground damage.\nHowever, if Braum raises E(Shield) when Karma's W first attaches, only the initial damage is ignored. If raised when the [[TETHER]] triggers later, only the [[TETHER]] damage is ignored.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Karma's basic attacks, Q and RQ.\nHowever, Karma's RQ stops immediately upon contact with Braum's E(Shield) and detonates on the ground."],
    },
    karma: {
      ko: [],
      en: [],
    },
  },
};
