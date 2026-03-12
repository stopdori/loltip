// app/data/matchups/braum/braum_morgana.ts
import type { MatchupSummary } from "../_types";

export const braum_morgana: MatchupSummary = {
  champs: ["braum", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 모르가나 평타, Q, W(최초 1개), R([[TETHER]])을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, R은 1타는 막을 수 없고 2타([[TETHER]])만 막을([[DAMAGE_NULLIFY]]) 수 있음\n단, R 2타의 [[STUN]]은 남아있음.", "브라움 E(방패)로 모르가나 평타, Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 모르가나 Q의 [[ROOT]]는 남아있음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Morgana's basic attacks, Q, W (first instance), and R ([[TETHER]]).\nNote: R's first hit cannot be blocked — only the second hit ([[TETHER]]) can be [[DAMAGE_NULLIFY]]d.\nNote: R's second hit [[STUN]] still applies.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Morgana's basic attacks and Q.\nNote: Morgana's Q [[ROOT]] still applies."],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
