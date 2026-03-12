// app/data/matchups/braum/braum_maokai.ts
import type { MatchupSummary } from "../_types";

export const braum_maokai: MatchupSummary = {
  champs: ["braum", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 마오카이 평타, Q, W, E, 강화E(최초 한대), R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 마오카이 P(평타)는 브라움 E(방패)에 막혀도 마오카이 [[HEAL]]은 유효.", "브라움 E(방패)로 마오카이 Q, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 마오카이 Q의 범위 피해는 유효하고 [[SLOW]] [[KNOCKBACK]]도 유효. 즉, 투사체만 즉시 ''삭제''\n단, 마오카이 E(묘목)를 날릴 때, 브라움 E(방패)로 경로를 막으면 즉시 이동을 멈춤."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Maokai's basic attacks, Q, W, E, empowered E (first hit), and R.\nNote: Even if blocked by Braum's E (shield), Maokai's P (basic attack) still triggers Maokai's [[HEAL]].","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Maokai's Q, E, and R.\nNote: Maokai's Q area damage still applies, and [[SLOW]] and [[KNOCKBACK]] remain — only the projectile is immediately ''deleted''.\nNote: When Maokai's E (sapling) is thrown, blocking its path with Braum's E (shield) stops it immediately."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
