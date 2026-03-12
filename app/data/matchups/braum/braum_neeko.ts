// app/data/matchups/braum/braum_neeko.ts
import type { MatchupSummary } from "../_types";

export const braum_neeko: MatchupSummary = {
  champs: ["braum", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 니코 평타, Q(최초 피해), W(평타3), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 니코 R의 피해는 전혀 없음", "브라움 E(방패)로 니코 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 니코 Q 경로에 브라움 E(방패)로 막으면 즉시 발동\n단, 니코 W(평타3)는 투사체가 아니라 막을 수 없음.\n단, 니코 E의 [[ROOT]]은 남아있음.", "브라움 P의 [[STUN]]로 R의 [[AIRBORNE]]으로 니코 R을 끊을 수 없음", "브라움 평타, Q로 니코를 맞히면 P스택이 생기는데\n 이때 니코가 W를 사용하여 [[INVISIBILITY]]이 되고 분신이 나올 때 구분 할 수 있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Neeko's basic attacks, Q (first hit), W (3rd empowered auto), E, and R.\nNote: Neeko's R deals no damage at all","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Neeko's basic attacks, Q, and E.\nNote: If Braum's E (shield) blocks Neeko's Q path, it immediately triggers.\nNote: Neeko's W (3rd empowered auto) is not a projectile and cannot be blocked.\nNote: Neeko's E [[ROOT]] still applies.","Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Neeko's R","When Braum hits Neeko with basic attacks or Q, P stacks are applied.\nAt this point, if Neeko uses W to become [[INVISIBILITY]] and a clone appears, you can identify the real Neeko."],
    },
    neeko: {
      ko: [],
      en: [],
    },
  },
};
