// app/data/matchups/braum/braum_lissandra.ts
import type { MatchupSummary } from "../_types";

export const braum_lissandra: MatchupSummary = {
  champs: ["braum", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 리산드라 평타, P, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 단, 리산드라 R은 브라움 E(방패)를 원 밖으로 들어야함.\n즉, 리산드라 자신에게 쓸 때, 브라움에게 쓸 때, 브라움 아군에게 쓸 때 모두 방패를 원밖(뒤로)으로 들어야 막아짐.", "브라움 E(방패)로 리산드라 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 리산드라 Q는 즉시 ''삭제''되어 뒤로 퍼지는 투사체도 없음.\n단, 리산드라 E는 즉시 ''삭제''되어 리산드라가 E2를 사용 할 수 없음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lissandra's basic attacks, P, Q, W, E, and R.\nNote: For Lissandra's R, Braum must hold the shield facing outward (away from the center).\nThis applies whether R is cast on Lissandra herself, on Braum, or on a Braum ally.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lissandra's basic attacks, Q, and E.\nNote: Lissandra's Q is immediately ''deleted'' — the spreading projectiles behind it also disappear.\nNote: Lissandra's E is immediately ''deleted'' — Lissandra cannot use E2 afterward."],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
