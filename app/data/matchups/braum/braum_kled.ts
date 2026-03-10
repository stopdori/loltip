// app/data/matchups/braum/braum_kled.ts
import type { MatchupSummary } from "../_types";

export const braum_kled: MatchupSummary = {
  champs: ["braum", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 클레드 승마폼 평타, Q, W(평타), E, R / 낙마폼 평타, Q, W(평타)를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 클레드 승마폼 Q / 낙마폼 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]]로 클레드 승마폼 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 클레드 승마폼 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kled's mounted form basic attacks, Q, W (basic attacks), E and R, and dismounted form basic attacks, Q and W (basic attacks).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kled's mounted form Q and dismounted form Q.", "Braum's P [[STUN]] cannot interrupt Kled's mounted form E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Kled's mounted form E."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
