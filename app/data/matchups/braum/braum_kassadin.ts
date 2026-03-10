// app/data/matchups/braum/braum_kassadin.ts
import type { MatchupSummary } from "../_types";

export const braum_kassadin: MatchupSummary = {
  champs: ["braum", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카사딘 평타, Q, W(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 카사딘 E의 [[SLOW]]는 남아있음.\n단, 카사딘 R은 도착지점 중심부를 바라봐야 적용", "브라움 E(방패)로 카사딘 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 카사딘 R을 끊을 수 없음. 단, [[STUN]], [[AIRBORNE]]은 남아있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kassadin's basic attacks, Q, W (basic attacks), E and R.\nHowever, Kassadin's E [[SLOW]] still applies.\nHowever, R only applies when facing toward the center of the landing location.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kassadin's Q.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Kassadin's R. However, [[STUN]] and [[AIRBORNE]] still apply."],
    },
    kassadin: {
      ko: [],
      en: [],
    },
  },
};
