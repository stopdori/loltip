// app/data/matchups/braum/braum_drmundo.ts
import type { MatchupSummary } from "../_types";

export const braum_drmundo: MatchupSummary = {
  champs: ["braum", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 문도 박사 평타, Q, W(최초 한틱), E를 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 문도 박사 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Dr. Mundo's basic attacks, Q, W (first tick) and E", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Dr. Mundo's Q"],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Braum's P [[STUN]] and R [[AIRBORNE]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
  },
};
