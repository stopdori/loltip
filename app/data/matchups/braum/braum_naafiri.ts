// app/data/matchups/braum/braum_naafiri.ts
import type { MatchupSummary } from "../_types";

export const braum_naafiri: MatchupSummary = {
  champs: ["braum", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 나피리 평타, Q1, Q2, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 나피리의 출혈 데지미는 막을 수 없음.\n단, Q2의 [[LIFESTEAL]]은 유효", "브라움 E(방패)로 나피리 Q1, Q2를 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 나피리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 나피리 R을 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Naafiri's basic attacks, Q1, Q2, E, and R.\nNote: Naafiri's bleed damage cannot be blocked.\nNote: Q2's [[LIFESTEAL]] remains effective","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Naafiri's Q1 and Q2.","Braum's P [[STUN]] cannot interrupt Naafiri's R. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Naafiri's R"],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
