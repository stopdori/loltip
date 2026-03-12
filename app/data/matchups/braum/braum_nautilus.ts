// app/data/matchups/braum/braum_nautilus.ts
import type { MatchupSummary } from "../_types";

export const braum_nautilus: MatchupSummary = {
  champs: ["braum", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 노틸러스 평타, P(평타), Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 노틸러스 P(평타)의 [[ROOT]]는 남아있음.\n단, 노틸러스 Q의 [[GRAB]]은 남아있음.", "브라움 E(방패)로 노틸러스 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 다른 스킬들은 막을 수 없음.", "브라움 P의 [[STUN]]로 노틸러스 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 노틸러스 Q(그렙단계)를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nautilus's basic attacks, P (basic attack), Q, E, and R.\nNote: Nautilus's P (basic attack) [[ROOT]] still applies.\nNote: Nautilus's Q [[GRAB]] still applies.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nautilus's Q. Other skills cannot be blocked.","Braum's P [[STUN]] cannot interrupt Nautilus's Q. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Nautilus's Q (grab phase)"],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
