// app/data/matchups/braum/braum_nilah.ts
import type { MatchupSummary } from "../_types";

export const braum_nilah: MatchupSummary = {
  champs: ["braum", "nilah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 닐라 평타, 평타(강화), Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 P의 [[STUN]]로 닐라 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 닐라 E를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nilah's basic attacks, empowered basic attacks, Q, E, and R.","Braum's P [[STUN]] cannot interrupt Nilah's E. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Nilah's E"],
    },
    nilah: {
      ko: ["닐라 W의 [[DODGE]]로 브라움 평타를 무시 할 수 있음. 이때 브라움 P스택도 무시함."],
      en: ["Nilah's W [[DODGE]] can ignore Braum's basic attacks, including P stack application."],
    },
  },
};
