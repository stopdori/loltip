// app/data/matchups/braum/braum_lulu.ts
import type { MatchupSummary } from "../_types";

export const braum_lulu: MatchupSummary = {
  champs: ["braum", "lulu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 룰루 평타(최초 한대), Q(최초 한대), E를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 룰루 평타, Q, W([[POLYMORPH]])를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 룰루 W([[POLYMORPH]])는 브라움 E(방패) 뒤쪽 브라움의 아군에게 사용했을 때, 브라움이 대신 걸림.\n단, 룰루의 아군에게 사용하는 스킬은 브라움 E(방패)에 막히지 않음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lulu's basic attacks (first hit), Q (first hit), and E.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lulu's basic attacks, Q, and W ([[POLYMORPH]]).\nNote: If Lulu's W ([[POLYMORPH]]) is cast on a Braum ally behind the shield, Braum is hit instead.\nNote: Skills cast on Lulu's allies cannot be blocked by Braum's E (shield)."],
    },
    lulu: {
      ko: [],
      en: [],
    },
  },
};
