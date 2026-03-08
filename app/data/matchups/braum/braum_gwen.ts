// app/data/matchups/braum/braum_gwen.ts
import type { MatchupSummary } from "../_types";

export const braum_gwen: MatchupSummary = {
  champs: ["braum", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 그웬 평타, R(초최 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 그웬 R을 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]]로 그웬 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 그웬 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Gwen's basic attacks and R (first tick).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Gwen's R.", "Braum's P [[STUN]] cannot interrupt Gwen's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Gwen's E."],
    },
    gwen: {
      ko: ["그웬 W로 브라움 Q, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Braum's Q and R from hitting when outside the zone"],
    },
  },
};
