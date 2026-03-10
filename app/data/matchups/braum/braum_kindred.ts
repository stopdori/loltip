// app/data/matchups/braum/braum_kindred.ts
import type { MatchupSummary } from "../_types";

export const braum_kindred: MatchupSummary = {
  champs: ["braum", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 킨드레드 평타, Q, W(최초 한틱), E를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 킨드레드 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 킨드레드 Q의 투사체를 3개 막으면, 감소된 3개 피해를 받음", "브라움 P의 [[STUN]]로 킨드레드 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 킨드레드 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kindred's basic attacks, Q, W (first tick only) and E.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kindred's basic attacks, Q and E.\nHowever, blocking all 3 projectiles of Kindred's Q still deals reduced damage for each hit.", "Braum's P [[STUN]] cannot interrupt Kindred's Q. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Kindred's Q."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
