// app/data/matchups/braum/braum_ornn.ts
import type { MatchupSummary } from "../_types";

export const braum_ornn: MatchupSummary = {
  champs: ["braum", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 오른 평타, Q, W(최초 한틱), E, R1를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, R2는 막을([[DAMAGE_NULLIFY]]) 수 없음.\n단, 오른 E는 브라움 E(방패)로 막을 때, 오른 돌진에 닿아서 피해를 막았다면 벽에 닿는 범위 피해도 무시되고\n 오른 돌진에 닿지 않고 벽에 닿는 범위 피해만 막으려면 벽을 바라보고 E(방패)를 들어야 막을 수 있음. 단, E의 [[AIRBORNE]]은 남아있음.", "브라움 E(방패)로 오른 Q, R1, R2을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 오른 Q 경로에 브라움 E(방패)로 막을면 즉시 ''삭제''되어 [[WALL]] 생성이 없음.", "브라움 P의 [[STUN]]로 오른 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 오른 E를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Ornn's basic attacks, Q, W (first tick), E, and R1.\nNote: R2 cannot be [[DAMAGE_NULLIFY]]d.\nNote: For Ornn's E, if Braum's E (shield) blocks the charge, the wall area damage is also ignored.\nIf Braum does not block the charge and only wants to block the wall area damage, the shield must face the wall. Note: E's [[AIRBORNE]] still applies.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Ornn's Q, R1, and R2.\nNote: If Braum's E (shield) blocks Ornn's Q path, it is immediately ''deleted'' — no [[WALL]] is created.","Braum's P [[STUN]] cannot interrupt Ornn's E. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Ornn's E"],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
