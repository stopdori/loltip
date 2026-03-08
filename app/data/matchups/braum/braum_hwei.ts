// app/data/matchups/braum/braum_hwei.ts
import type { MatchupSummary } from "../_types";

export const braum_hwei: MatchupSummary = {
  champs: ["braum", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 흐웨이 평타, P, QQ, QW, QE(최초 한틱), EQ, EW, EE를 막을([[DAMAGE_NULLIFY]]) 수 있음. R은 막을 수 없음\n단, 흐웨이 P, QW는 흐웨이 방향을 바라봐야 적용.", "브라움 E(방패)로 흐웨이 평타, QE, WE(평타), EQ, EW, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, QE의 [[SLOW]], EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[AIRBORNE]] [[SLOW]]는 남아있음.\n단, 흐웨이 QE는 방패에 닿는 즉시 전진을 멈춤"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Hwei's basic attacks, P, QQ, QW, QE (first tick), EQ, EW and EE. R cannot be blocked.\nHowever, Hwei's P and QW require facing Hwei's direction to apply.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Hwei's basic attacks, QE, WE (auto), EQ, EW and R.\nHowever, QE's [[SLOW]], EQ's [[FEAR]], EW's [[ROOT]], and EE's [[AIRBORNE]] [[SLOW]] still apply.\nHwei's QE stops advancing immediately upon hitting the shield."],
    },
    hwei: {
      ko: [],
      en: [],
    },
  },
};
