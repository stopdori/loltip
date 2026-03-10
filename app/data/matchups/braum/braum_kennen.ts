// app/data/matchups/braum/braum_kennen.ts
import type { MatchupSummary } from "../_types";

export const braum_kennen: MatchupSummary = {
  champs: ["braum", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 케넨 평타, Q, W, E, R(최초 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 케넨 P의 [[STUN]]이 발동한다면 남아있음.", "브라움 E(방패)로 케넨 평타, Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 케넨 Q는 P스택을 쌓아 줌\n단, 케넨 막을([[INTERCEPT_PROJECTILE]]) 수 없음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 케넨 R을 끊을 수 없음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kennen's basic attacks, Q, W, E and R (first tick only).\nHowever, Kennen's P [[STUN]] still applies if triggered.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kennen's basic attacks and Q.\nHowever, Kennen's Q builds P stacks.\nHowever, Kennen's R cannot be [[INTERCEPT_PROJECTILE]].", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Kennen's R."],
    },
    kennen: {
      ko: [],
      en: [],
    },
  },
};
