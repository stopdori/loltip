// app/data/matchups/braum/braum_khazix.ts
import type { MatchupSummary } from "../_types";

export const braum_khazix: MatchupSummary = {
  champs: ["braum", "khazix"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카직스 평타, P, Q, Q(강화), W, W(강화), E, E(강화)를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 카직스 P의 [[SLOW]], W(강화)의 [[SLOW]]는 남아있음.\n단, 카직스 W(강화)의 투사체 3개를 다 막아도 데미지가 들어오지 않거나, 피해 감소 상태에 3개를 맞아도 1개로 판정.\n단, 카직스 E와 E(강화)는 착지지점 중심부를 바라봐야 적용", "브라움 E(방패)로 카직스 W, W(강화)를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 카직스 W와 W(강화)의 [[HEAL]]은 조건이 맞으면 적용.", "브라움 P의 [[STUN]]로 카직스 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 카직스 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kha'Zix's basic attacks, P, Q, Q (evolved), W, W (evolved), E and E (evolved).\nHowever, Kha'Zix's P [[SLOW]] and W (evolved) [[SLOW]] still apply.\nHowever, blocking all 3 projectiles of W (evolved) may deal no damage, or all 3 hitting during damage reduction counts as only 1.\nHowever, E and E (evolved) only apply when facing toward the center of the landing location.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kha'Zix's W and W (evolved).\nHowever, Kha'Zix's W and W (evolved) [[HEAL]] still applies if conditions are met.", "Braum's P [[STUN]] cannot interrupt Kha'Zix's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Kha'Zix's E."],
    },
    khazix: {
      ko: [],
      en: [],
    },
  },
};
