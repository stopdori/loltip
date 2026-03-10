// app/data/matchups/braum/braum_katarina.ts
import type { MatchupSummary } from "../_types";

export const braum_katarina: MatchupSummary = {
  champs: ["braum", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카타리나 평타, P, Q, E, R(최초 1개)를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 카타리나 평타, Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 카타리나 Q는 방패에 막히면 방패 앞에 단검이 떨어짐\n단, 카타리나 R은 범위 내 적의 숫자에 따라 던지는 투사체 양이 다르기 때문에, 브라움이 최대 3배의 피해까지 받을 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 카타리나 R(시전 집중)을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Katarina's basic attacks, P, Q, E and R (first hit only).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Katarina's basic attacks, Q and R.\nHowever, if Katarina's Q is blocked by the shield, the dagger drops in front of the shield.\nHowever, Katarina's R throws projectiles based on the number of enemies in range, so Braum can take up to 3x the damage.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Katarina's R (channeled cast)."],
    },
    katarina: {
      ko: [],
      en: [],
    },
  },
};
