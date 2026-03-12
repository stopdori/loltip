// app/data/matchups/braum/braum_nami.ts
import type { MatchupSummary } from "../_types";

export const braum_nami: MatchupSummary = {
  champs: ["braum", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 나미 평타, Q, W(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 나미 평타, Q, W(챔피언 별로 상이), E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 나미 Q는 브라움 E(방패)에 경로가 막히면 즉시 발동 되고, [[SUSPENDING]]에 걸림\n단, 나미 W의 [[SLOW]]는 남아있음.\n단, 나미 E를 적군에게 사용했을 때, 브라움이 E(방패)로 경로를 막으면 브라움이 대신 맞음. (나미 아군에게 사용하는 E는 막을 수 없음)."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nami's basic attacks, Q, W (basic attack), E, and R.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nami's basic attacks, Q, W (varies by champion), E, and R.\nNote: If Braum's E (shield) blocks Nami's Q path, Q immediately triggers and [[SUSPENDING]] is applied.\nNote: Nami's W [[SLOW]] still applies.\nNote: If Nami's E is cast on an enemy and Braum blocks its path, Braum is hit instead. (Nami's E cast on allies cannot be blocked.)"],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
