// app/data/matchups/braum/braum_masteryi.ts
import type { MatchupSummary } from "../_types";

export const braum_masteryi: MatchupSummary = {
  champs: ["braum", "masteryi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 마이 평타, P(평타 최초 한대), Q(최초 한대)를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 마이 E의 고정데미지는 막을 수 없음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 마이 W를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Master Yi's basic attacks, P (first basic attack hit), and Q (first hit).\nNote: Master Yi's E true damage cannot be blocked.","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Master Yi's W"],
    },
    masteryi: {
      ko: [],
      en: [],
    },
  },
};
