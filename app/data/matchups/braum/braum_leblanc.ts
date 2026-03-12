// app/data/matchups/braum/braum_leblanc.ts
import type { MatchupSummary } from "../_types";

export const braum_leblanc: MatchupSummary = {
  champs: ["braum", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 르블랑 평타, Q, W, E, E의 [[TETHER]]를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 르블랑 W는 도착지점 중심 부분을 바라봐야 적용", "브라움 E(방패)로 르블랑 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n 단, 르블랑 Q의 인장스택은 남아있음.\n 단, 르블랑 E의 [[TETHER]]효과가 발동하면 [[ROOT]]는 남아있음.", "브라움 P의 [[STUN]]로 르블랑 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 르블랑 W을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] LeBlanc's basic attacks, Q, W, E and E's [[TETHER]].\nHowever, LeBlanc's W only applies when facing toward the center of the landing location.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] LeBlanc's basic attacks, Q and E.\nHowever, LeBlanc's Q sigil stack still applies.\nHowever, if LeBlanc's E [[TETHER]] triggers, the [[ROOT]] still applies.", "Braum's P [[STUN]] cannot interrupt LeBlanc's W. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt LeBlanc's W."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
