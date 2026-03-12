// app/data/matchups/braum/braum_poppy.ts
import type { MatchupSummary } from "../_types";

export const braum_poppy: MatchupSummary = {
  champs: ["braum", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 뽀삐 평타, P(평타), Q(최초 피해), Q(폭발 피해), W, E, R, R(충전)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 뽀삐 Q는 최초 피해, 폭발 피해 중 하나만 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 뽀삐 W는 브라움이 E(방패)를 뽀삐 방향으로 들고 브라움 W를 아군대상에게 사용하여 이동 할 때 브라움이 피해를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n이때, 뽀삐 W의 [[GROUNDED]]는 유효.", "브라움 E(방패)로 뽀삐 P(평타), R(충전)을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 뽀삐 P를 막아도 뽀삐의 P(방패)는 바닥에 떨어짐.", "브라움 P의 [[STUN]]로 뽀삐 E를 끊을 수 없음.", "브라움 R의 [[AIRBORNE]]으로 뽀삐 E를 끊을 수 있음", "브라움 P의 [[STUN]] R의 [[AIRBORNE]]으로 뽀삐 R(시전 집중)을 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Poppy's basic attacks, P (basic attack), Q (initial damage), Q (explosion damage), W, E, R, and R (charge).\nNote: Only one of Q's initial or explosion damage can be [[DAMAGE_NULLIFY]]d at a time.\nNote: For Poppy's W, if Braum holds the shield toward Poppy while moving via W on an ally, Braum can [[DAMAGE_NULLIFY]] the damage.\nAt this time, Poppy's W [[GROUNDED]] still applies.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Poppy's P (basic attack) and R (charge).\nNote: Even if Braum blocks Poppy's P, Poppy's P (shield) still drops to the ground.","Braum's P [[STUN]] cannot interrupt Poppy's E.","Braum's R [[AIRBORNE]] can interrupt Poppy's E","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Poppy's R (channel)"],
    },
    poppy: {
      ko: ["뽀삐 W의 [[GROUNDED]]로 브라움 W를 끊을 수 있음.", "뽀삐 E로 브라움 W를 끊을 수 있음."],
      en: ["Poppy's W [[GROUNDED]] can interrupt Braum's W movement.","Poppy's E can interrupt Braum's W movement."],
    },
  },
};
