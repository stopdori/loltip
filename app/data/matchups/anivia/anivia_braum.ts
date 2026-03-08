// app/data/matchups/anivia/anivia_braum.ts
import type { MatchupSummary } from "../_types";

export const anivia_braum: MatchupSummary = {
  champs: ["anivia", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 애니비아 평타, Q, E, R(처음 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 애니비아 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, 애니비아 Q는 즉시 ''삭제''되어 데미지, [[STUN]]이 없음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 애니비아 R(채널링)을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Anivia's basic attacks, Q, E and R (first tick)", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Anivia's Q. However, Anivia's Q is instantly ''destroyed'', so there is no damage or [[STUN]].", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Anivia's R (channeling)"],
    },
  },
};
