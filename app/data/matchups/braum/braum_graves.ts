// app/data/matchups/braum/braum_graves.ts
import type { MatchupSummary } from "../_types";

export const braum_graves: MatchupSummary = {
  champs: ["braum", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 그브(그레이브즈) 평타, Q, W, R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, W는 그브(그레이브즈) 방향을 바라봐야 적용", "브라움 E(방패)로 그브(그레이브즈) 평타, Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 그브(그레이브즈) Q는 방패 앞에 멈추고 시간지나 폭발\n 그브(그레이브즈) W는 불가", "브라움 P의 [[STUN]]로 그브(그레이브즈) E, R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 그브(그레이브즈) E, R의 이동을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Graves's basic attacks, Q, W and R. However, for W, Braum must face Graves's direction to apply.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Graves's basic attacks, Q and R.\nHowever, Graves's Q stops in front of the shield and explodes after a delay.\nGraves's W cannot be intercepted.", "Braum's P [[STUN]] cannot interrupt Graves's E or R. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Graves's E and R movement."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
