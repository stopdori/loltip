// app/data/matchups/braum/braum_nunu.ts
import type { MatchupSummary } from "../_types";

export const braum_nunu: MatchupSummary = {
  champs: ["braum", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 누누 평타, Q, W, E(최초 한틱), E(속박) R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 누누 W, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 누누 W는 브라움 E(방패)에 닿는게 아니고 브라움에게 닿아 사라지고 범위 피해를 줌. 이때 [[AIRBORNE]]은 남아있음.\n단, 누누 E의 [[ROOT]]은 남아있음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 누누 W(채널링), R(시전 집중)을 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nunu's basic attacks, Q, W, E (first tick), E ([[ROOT]]), and R.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nunu's W and E.\nNote: Nunu's W doesn't hit Braum's shield directly — it hits Braum and disappears, dealing area damage. [[AIRBORNE]] still applies.\nNote: Nunu's E [[ROOT]] still applies.","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Nunu's W (channel) and R (cast focus)"],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
