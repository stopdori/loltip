// app/data/matchups/braum/braum_malphite.ts
import type { MatchupSummary } from "../_types";

export const braum_malphite: MatchupSummary = {
  champs: ["braum", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 말파이트 평타, Q, W(평타, 충격파), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 말파이트 E의 [[AS_DOWN]], R의 [[AIRBORNE]]은 남아있음.", "브라움 E(방패)로 말파이트 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 말파이트 Q의 [[SLOW]]와 말파이트의 [[MS_UP]]은 유효"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Malphite's basic attacks, Q, W (basic attacks, shockwave), E, and R.\nNote: Malphite's E [[AS_DOWN]] and R [[AIRBORNE]] still apply.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Malphite's Q.\nNote: Malphite's Q [[SLOW]] and Malphite's own [[MS_UP]] remain effective"],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Braum's P [[STUN]] and R [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
