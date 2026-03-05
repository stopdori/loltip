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
      ko: ["브라움 E로 오로라 평타, Q1, E, R을 [[DAMAGE_NULLIFY]] 할 수 있음.\n단, Q1은 데미지가 들어오지 않지만 Q2는 데미지가 들어옴\n오로라 R은 중앙부분에 방패를 들어야 [[DAMAGE_NULLIFY]]" ,"브라움 E로 오로라 평타, Q1를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 오로라가 Q2를 사용할 수 있음 "],
      en: ["Braum's E can [[DAMAGE_NULLIFY]] against Aurora's 평타, Q1, E and R\\nHowever, Q1 does not deal damage but Q2 does\\nFor Aurora's R, Braum must hold his shield at the center to [[DAMAGE_NULLIFY]]", "Braum's E can [[INTERCEPT_PROJECTILE]] Aurora's auto attacks and Q1\\nHowever, Aurora can still use Q2"],
    },
  },
};
