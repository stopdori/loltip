// app/data/matchups/braum/braum_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const braum_jarvaniv: MatchupSummary = {
  champs: ["braum", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 자르반 평타, Q, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 P의 [[STUN]]로 자르반 EQ를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "브라움 R의 [[AIRBORNE]]으로 자르반 EQ를 끊을 수 있음.", "브라움 Q의 [[STUN]], R의 [[AIRBORNE]]으로 자르반 R을 끊을 수 없음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Jarvan's basic attacks, Q, E and R.", "Braum's P [[STUN]] cannot interrupt Jarvan's EQ. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Jarvan's EQ.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Jarvan's R."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
