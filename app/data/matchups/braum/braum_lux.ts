// app/data/matchups/braum/braum_lux.ts
import type { MatchupSummary } from "../_types";

export const braum_lux: MatchupSummary = {
  champs: ["braum", "lux"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 럭스 평타, P, Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 럭스 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 럭스 Q는 즉시 ''삭제''되어 관통되지 않음. [[ROOT]]은 남아있음.\n단, 럭스 E를 날릴 때 브라움 E(방패)로 경로를 막으면 즉시 이동을 멈춤.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 럭스 R(시전 집중)을 끊을 수 없음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lux's basic attacks, P, Q, E, and R.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lux's basic attacks, Q, and E.\nNote: Lux's Q is immediately ''deleted'' and does not pass through. [[ROOT]] still applies.\nNote: If Braum's E (shield) blocks the path of Lux's E while traveling, it stops immediately.","Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Lux's R (channel)"],
    },
    lux: {
      ko: [],
      en: [],
    },
  },
};
