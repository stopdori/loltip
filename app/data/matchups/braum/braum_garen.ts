// app/data/matchups/braum/braum_garen.ts
import type { MatchupSummary } from "../_types";

export const braum_garen: MatchupSummary = {
  champs: ["braum", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 가렌 평타, Q, E(처음 한틱), R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 가렌 E를 끊을 수 없음. 단, [[STUN]], [[AIRBORNE]]은 남아있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Garen's basic attacks, Q, E (first tick), and R.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Garen's E. However, [[STUN]] and [[AIRBORNE]] still apply."],
    },
    garen: {
      ko: [],
      en: [],
    },
  },
};
