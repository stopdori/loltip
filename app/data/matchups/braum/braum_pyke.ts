// app/data/matchups/braum/braum_pyke.ts
import type { MatchupSummary } from "../_types";

export const braum_pyke: MatchupSummary = {
  champs: ["braum", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 파이크 평타, Q, Q(충전), E를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 파이크 E는 브라움 E(방패)를 파이크 잔상 쪽으로 들어야 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 파이크 R은 막을 수 없음.", "브라움 E(방패)로 파이크 Q, Q(충전), E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 파이크 Q(충전)의 [[GRAB]]은 남아있음.\n단, 파이크 E는 잔상 쪽으로 들어야 막을([[INTERCEPT_PROJECTILE]]) 수 있음.\n단, 파이크 E의 [[STUN]]은 남아있음.", "브라움 P의 [[STUN]]로 파이크 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 파이크 E를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Pyke's basic attacks, Q, Q (charge), and E.\nNote: For Pyke's E, Braum must hold the shield toward Pyke's afterimage.\nNote: Pyke's R cannot be blocked.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Pyke's Q, Q (charge), and E.\nNote: Pyke's Q (charge) [[GRAB]] still applies.\nNote: For Pyke's E, the shield must face the afterimage.\nNote: Pyke's E [[STUN]] still applies.","Braum's P [[STUN]] cannot interrupt Pyke's E. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Pyke's E"],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
