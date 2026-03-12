// app/data/matchups/braum/braum_qiyana.ts
import type { MatchupSummary } from "../_types";

export const braum_qiyana: MatchupSummary = {
  champs: ["braum", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 키아나 평타, Q, 숲Q, 물Q, 땅Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n키아나 R은 판정이 다양함.\n1.강가나 수풀에서 키아나 R을 사용했을 때 (강가 수풀)폭발은 키아나를 바라보고 브라움 E(방패)를 들어야 막을([[DAMAGE_NULLIFY]]) 수 있음\n2. 벽에 키아나 R을 사용했을 때 벽 폭발은 브라움 E(방패)를 벽을 바라보고 사용해야 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 키아나 숲Q, 물Q, 땅Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 키아나 숲Q는 브라움 E(방패)에 닿는 순간 닿는 순간 투사체 삭제. [[INVISIBILITY]]수풀 이동도 멈춤.\n단, 키아나 물Q, 땅Q는 브라움 E(방패)에 닿는 순간 투사체 삭제. 물Q의 [[SLOW]], [[ROOT]]는 남아있음.\n키아나 R의 투사체는 브라움 E(방패)에 닿는 순간 사라짐. [[KNOCKBACK]]은 남아있음.", "브라움 P의 [[STUN]]로 키아나 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 키아나 E를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Qiyana's basic attacks, Q, Grass Q, Water Q, Earth Q, E, and R.\nQiyana's R has varied hitboxes.\n1. When R is used near a river or brush, hold Braum's E (shield) facing Qiyana to block the explosion.\n2. When R is used on a wall, hold Braum's E (shield) facing the wall to block the wall explosion.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Qiyana's Grass Q, Water Q, Earth Q, and R.\nNote: Qiyana's Grass Q is immediately deleted upon hitting the shield, stopping the [[INVISIBILITY]] brush movement.\nNote: Qiyana's Water Q and Earth Q are immediately deleted. Water Q's [[SLOW]] and [[ROOT]] still apply.\nQiyana's R projectile disappears when it hits the shield. [[KNOCKBACK]] still applies.","Braum's P [[STUN]] cannot interrupt Qiyana's E. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Qiyana's E"],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
