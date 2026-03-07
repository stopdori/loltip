// app/data/matchups/aurora/aurora_braum.ts
import type { MatchupSummary } from "../_types";

export const aurora_braum: MatchupSummary = {
  champs: ["aurora", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 오로라 평타, Q1, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, Q1은 데미지가 들어오지 않지만 Q2는 데미지가 들어옴\n오로라 R은 중앙방향에 E(방패)를 들어야 [[DAMAGE_NULLIFY]]" ,"브라움 E(방패)로 오로라 평타, Q1, Q2를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 오로라가 Q2를 사용할 수 있음 "],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Aurora's basic attacks, Q1, E and R\\nHowever, Q1 does not deal damage but Q2 does\\nFor Aurora's R, Braum must hold his shield at the center to [[DAMAGE_NULLIFY]]", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Aurora's basic attacks, Q1 and Q2\\nHowever, Aurora can still use Q2"],
    },
  },
};
