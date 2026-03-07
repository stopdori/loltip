// app/data/matchups/braum/braum_galio.ts
import type { MatchupSummary } from "../_types";

export const braum_galio: MatchupSummary = {
  champs: ["braum", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 갈리오 평타, P(평타), Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 갈리오 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 갈리오 Q(투사체)는 방패에 닿으면 투사체 삭제.", "브라움 P의 [[STUN]]로 갈리오 E를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "브라움 R의 [[AIRBORNE]]으로 갈리오 E(돌진단계)를 끊을 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 갈리오 W(도발), R(시전집중)을 끊을 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Galio's basic attacks, P(auto), Q, W, E, and R.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Galio's Q\nHowever, Galio's Q projectile is destroyed upon hitting the shield.", "Braum's P [[STUN]] cannot interrupt Galio's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Galio's E (dash phase).", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Galio's W(taunt) and R(channeling)."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
