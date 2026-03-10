// app/data/matchups/braum/braum_karthus.ts
import type { MatchupSummary } from "../_types";

export const braum_karthus: MatchupSummary = {
  champs: ["braum", "karthus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카서스 평타, Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 카서스 Q는 Q쪽을 바라봐야 적용\n단, 카서스 R은 카서스쪽을 바라봐야 적용", "브라움 E(방패)로 카서스 평타를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 카서스 R(시전 집중)을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Karthus's basic attacks, Q, E and R.\nHowever, Q only applies when facing toward Q.\nHowever, R only applies when facing toward Karthus.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Karthus's basic attacks.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Karthus's R (channeled cast)."],
    },
    karthus: {
      ko: [],
      en: [],
    },
  },
};
