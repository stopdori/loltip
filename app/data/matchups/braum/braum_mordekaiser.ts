// app/data/matchups/braum/braum_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const braum_mordekaiser: MatchupSummary = {
  champs: ["braum", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 모데카이저 평타, Q, E를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 모데카이저 E는 브라움 E(방패)를 모데 반대 방향으로 들어야 막을 수 있음\n단, 모데카이저 E의 [[GRAB]]은 남아있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Mordekaiser's basic attacks, Q, and E.\nNote: For Mordekaiser's E, Braum must hold the shield facing away from Mordekaiser.\nNote: Mordekaiser's E [[GRAB]] still applies."],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
};
