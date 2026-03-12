// app/data/matchups/braum/braum_lucian.ts
import type { MatchupSummary } from "../_types";

export const braum_lucian: MatchupSummary = {
  champs: ["braum", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 루시안 평타(최초 한개), Q, W, R(최초 한개)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 루시안 W의 표식은 남아있음.", "브라움 E(방패)로 루시안 평타, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 루시안 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 루시안 E를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lucian's basic attacks (first hit), Q, W, and R (first hit).\nNote: Lucian's W mark remains.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lucian's basic attacks and R.","Braum's P [[STUN]] cannot interrupt Lucian's E. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Lucian's E"],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
