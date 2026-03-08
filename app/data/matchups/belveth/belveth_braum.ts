// app/data/matchups/belveth/belveth_braum.ts
import type { MatchupSummary } from "../_types";

export const belveth_braum: MatchupSummary = {
  champs: ["belveth", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 벨베스 평타, Q, W, E(처음 한틱), R을 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 P의 [[STUN]]로 벨베스 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 벨베스 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Bel'Veth's basic attacks, Q, W, E (first tick) and R", "Braum's P [[STUN]] cannot interrupt Bel'Veth's Q. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Bel'Veth's Q."],
    },
  },
};
