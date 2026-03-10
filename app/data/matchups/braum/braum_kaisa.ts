// app/data/matchups/braum/braum_kaisa.ts
import type { MatchupSummary } from "../_types";

export const braum_kaisa: MatchupSummary = {
  champs: ["braum", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카이사 평타, Q, Q(진화), W, W(진화)를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, Q는 최초 타격되는 투사체 1개만", "브라움 E(방패)로 카이사 평타, Q, Q(진화) W, W(진화)를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 카이사 평타, W, W(진화)가 막혀도 카이사 P의 스택은 적용", "브라움 P의 [[STUN]]로 카이사 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 카이사 R을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kai'Sa's basic attacks, Q, Q (evolved), W and W (evolved).\nHowever, only the first projectile of Q that hits is blocked.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kai'Sa's basic attacks, Q, Q (evolved), W and W (evolved).\nHowever, Kai'Sa's P stacks still apply even if basic attacks, W or W (evolved) are intercepted.", "Braum's P [[STUN]] cannot interrupt Kai'Sa's R. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Kai'Sa's R."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
