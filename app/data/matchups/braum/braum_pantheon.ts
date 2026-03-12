// app/data/matchups/braum/braum_pantheon.ts
import type { MatchupSummary } from "../_types";

export const braum_pantheon: MatchupSummary = {
  champs: ["braum", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 판테온 평타, Q, Q(투창), W(스킬), W(강화평타 최초 한대), E(최초 한틱), R(창), R(착지)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 판테온 R은 떨어지는 창을 막으면 R의 착지 데미지를 막을 수 없음.", "브라움 E(방패)로 판테온 Q(투창)를 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 판테온 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 판테온 W를 끊을 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 판테온 R(시전 집중)을 끊을 수 있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Pantheon's basic attacks, Q, Q (javelin), W (skill), W (empowered auto first hit), E (first tick), R (spear), and R (landing).\nNote: If Braum blocks the falling spear from Pantheon's R, the landing damage cannot be blocked.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Pantheon's Q (javelin).","Braum's P [[STUN]] cannot interrupt Pantheon's W. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Pantheon's W","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Pantheon's R (channel)."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
