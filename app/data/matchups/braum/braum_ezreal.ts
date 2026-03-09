// app/data/matchups/braum/braum_ezreal.ts
import type { MatchupSummary } from "../_types";

export const braum_ezreal: MatchupSummary = {
  champs: ["braum", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 이즈리얼 평타, Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 이즈리얼 W는 브라움에게 발동될 때 평타나 다른 스킬의 데미지를 무효화하고 W의 데미지는 감소 없이 적용.", "브라움 E(방패)로 이즈리얼 평타, Q, W, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 이즈리얼 R(투사체)은 방패에 닿으면 투사체 삭제.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 이즈리얼 E(비전이동), R(시전집중)을 끊을 수 없음. 단, [[STUN]], [[AIRBORNE]]은 남아있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Ezreal's basic attacks, Q, E, and R.\nEzreal's W nullifies basic attack and skill damage when triggered on Braum, but W's own damage applies without reduction.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Ezreal's basic attacks, Q, W, E, and R.\nHowever, Ezreal's R projectile is destroyed upon hitting the shield.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Ezreal's E(Arcane Shift) or R(channeling). However, [[STUN]] and [[AIRBORNE]] still apply."],
    },
    ezreal: {
      ko: [],
      en: [],
    },
  },
};
