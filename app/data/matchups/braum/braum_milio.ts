// app/data/matchups/braum/braum_milio.ts
import type { MatchupSummary } from "../_types";

export const braum_milio: MatchupSummary = {
  champs: ["braum", "milio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 밀리오 평타, P(평타), Q를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 밀리오 P의 추가 데미지는 막을 수 있고, 추가 지속 피해는 막을 수 없음.", "브라움 E(방패)로 밀리오 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 밀리오 평타를 막을 수 없음.\n단, 밀리오 Q의 [[KNOCKBACK]]은 유효하고, 착지하는 범위 피해가 없음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Milio's basic attacks, P (basic attack), and Q.\nNote: Milio's P bonus damage can be blocked, but the periodic bonus damage cannot.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Milio's Q.\nNote: Milio's basic attacks cannot be blocked.\nNote: Milio's Q [[KNOCKBACK]] still applies, and there is no landing area damage."],
    },
    milio: {
      ko: [],
      en: [],
    },
  },
};
