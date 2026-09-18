// app/data/matchups/braum/braum_evelynn.ts
import type { MatchupSummary } from "../_types";

export const braum_evelynn: MatchupSummary = {
  champs: ["braum", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 이블린 평타, Q(최초 한대), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Evelynn's basic attacks, Q (first hit), E, and R"],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 브라움 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Braum's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
