// app/data/matchups/braum/braum_olaf.ts
import type { MatchupSummary } from "../_types";

export const braum_olaf: MatchupSummary = {
  champs: ["braum", "olaf"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 올라프 평타, Q를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 올라프 E는 브라움 E(방패)로 막을 수 없음.", "브라움 E(방패)로 올라프 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 올라프 Q는 브라움 E(방패)에 막혀 바로 땅에 떨어짐. 단 [[AR_SHRED]]는 남아있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Olaf's basic attacks and Q.\nNote: Olaf's E cannot be blocked by Braum's E (shield).","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Olaf's Q.\nNote: Olaf's Q immediately falls to the ground when blocked. Note: [[AR_SHRED]] still applies."],
    },
    olaf: {
      ko: [],
      en: [],
    },
  },
};
