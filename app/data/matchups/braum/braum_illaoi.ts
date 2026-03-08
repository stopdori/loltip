// app/data/matchups/braum/braum_illaoi.ts
import type { MatchupSummary } from "../_types";

export const braum_illaoi: MatchupSummary = {
  champs: ["braum", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 일라오이 평타, P, Q, W(평타), E(영혼 최초 한대), R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 일라오이 P는 일라오이 방향을 바라봐야 적용.", "브라움 E(방패)로 일라오이 E을 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]]로 일라오이 Q, W, E, R을 끊을 수 없음. 단, Q의 [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 일라오이 Q, E, R를 끊을 수 없음", "브라움 R의 [[AIRBORNE]]으로 일라오이 W의 이동을 끊을 수 있음. (정말 어렵게 가능)\n단 데미지는 들어감"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Illaoi's basic attacks, P, Q, W (auto), E (first soul hit) and R.\nHowever, Illaoi's P requires facing Illaoi's direction to apply.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Illaoi's E.", "Braum's P [[STUN]] cannot interrupt Illaoi's Q, W, E or R. However, Q's [[STUN]] still applies.", "Braum's R [[AIRBORNE]] cannot interrupt Illaoi's Q, E or R.", "Braum's R [[AIRBORNE]] can interrupt Illaoi's W movement (very difficult).\nHowever, damage still applies."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
