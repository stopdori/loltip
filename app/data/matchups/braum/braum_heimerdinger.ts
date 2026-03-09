// app/data/matchups/braum/braum_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const braum_heimerdinger: MatchupSummary = {
  champs: ["braum", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 하이머딩거 평타, Q RQ(최초 한틱 포탑 데미지), W RW(최초 한틱), E RE를 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 하이머딩거 평타, Q, W, E, RQ, RW, RE를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, E RE의 [[STUN]]은 남아있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Heimerdinger's basic attacks, Q/RQ (first tick turret damage), W/RW (first tick) and E/RE.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Heimerdinger's basic attacks, Q, W, E, RQ, RW and RE.\nHowever, E and RE's [[STUN]] still applies."],
    },
    heimerdinger: {
      ko: [],
      en: [],
    },
  },
};
