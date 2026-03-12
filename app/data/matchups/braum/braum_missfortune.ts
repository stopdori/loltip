// app/data/matchups/braum/braum_missfortune.ts
import type { MatchupSummary } from "../_types";

export const braum_missfortune: MatchupSummary = {
  champs: ["braum", "missfortune"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 미포 평타, Q, E(최초 한틱), R(최초 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 미포 평타, Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 미포 Q는 브라움 E(방패)에 처음 적중하면 뒤로 튕기는 투사체가 없음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 미포 R(채널링)을 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Miss Fortune's basic attacks, Q, E (first tick), and R (first tick).","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Miss Fortune's basic attacks, Q, and R.\nNote: If Miss Fortune's Q hits Braum's E (shield) first, there is no bouncing projectile.","Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Miss Fortune's R (channel)"],
    },
    missfortune: {
      ko: [],
      en: [],
    },
  },
};
