// app/data/matchups/amumu/amumu_braum.ts
import type { MatchupSummary } from "../_types";

export const amumu_braum: MatchupSummary = {
  champs: ["amumu", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 아무무 평타, Q, W(처음 한틱), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 아무무 Q, R의 [[STUN]]은 남아있음.", "브라움 E(방패)로 아무무 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, [[STUN]]은 남아있음.", "브라움 P의 [[STUN]]로 아무무 Q을 끊을 수 없음. 단, [[STUN]]은 남아있음","브라움 R의 [[AIRBORNE]]으로 아무무 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Amumu's basic attacks, Q, W (first tick), E, and R.\nHowever, Amumu's Q and R [[STUN]] still applies.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Amumu's Q", "Braum's P [[STUN]] cannot interrupt Amumu's Q. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Amumu's Q"],
    },
  },
};
