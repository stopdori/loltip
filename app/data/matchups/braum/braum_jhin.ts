// app/data/matchups/braum/braum_jhin.ts
import type { MatchupSummary } from "../_types";

export const braum_jhin: MatchupSummary = {
  champs: ["braum", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 진 평타, Q, W, E(덫), R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, E는 덫을 바라봐야 적용", "브라움 E(방패)로 진 평타, Q, W, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 진 Q(춤추는 유탄)는 유탄을 바라보고 막아야 적용. 방패에 막히면 더이상 튕기지 않음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 진 R(시전 집중)을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Jhin's basic attacks, Q, W, E (trap) and R. However, E only applies when facing toward the trap.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Jhin's basic attacks, Q, W, E and R.\nHowever, Jhin's Q (Dancing Grenade) must be blocked while facing it to apply. Once blocked by the shield, it stops bouncing.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Jhin's R (channeled cast)."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
