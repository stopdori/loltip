// app/data/matchups/braum/braum_orianna.ts
import type { MatchupSummary } from "../_types";

export const braum_orianna: MatchupSummary = {
  champs: ["braum", "orianna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 오리아나 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 오리아나 Q, W, E, R 모두 브라움 E(방패)를 공을 바라보고 들어야 막을 수 있음.", "브라움 E(방패)로 오리아나 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 오리아나 Q, E 브라움 E(방패)로 경로를 막으면 공이 E(방패) 앞에 멈춤."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Orianna's basic attacks, Q, W, E, and R.\nNote: For all of Orianna's skills (Q, W, E, R), Braum must hold the shield facing toward the ball.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Orianna's basic attacks, Q, and E.\nNote: If Braum's E (shield) blocks the path of Orianna's Q or E, the ball stops in front of the shield."],
    },
    orianna: {
      ko: [],
      en: [],
    },
  },
};
