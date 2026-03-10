// app/data/matchups/braum/braum_gangplank.ts
import type { MatchupSummary } from "../_types";

export const braum_gangplank: MatchupSummary = {
  champs: ["braum", "gangplank"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 갱플랭크 평타, Q, E, R(최초 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 갱플랭크 P는 브라움에게 발동될 때 평타 데미지를 무효화하고 P의 데미지는 감소 없이 적용.\n E(화약통)는 중심부를 바라보고 막아야 적용.\n갱플랭크 R의 ''죽음의 여신'' 강화시 중심 부분에 떨어지는 고정피해를 바라보고 브라움 E(방패)를 사용하면 정말 어렵게 피해 무효화가 가능. 대부분 피해 감소", "브라움 E(방패)로 갱플랭크 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Gangplank's basic attacks, Q, E, and R (first tick).\nWhen Gangplank's P activates on Braum, the basic attack damage is nullified but P's damage is applied without reduction.\nE (Powder Keg) must be blocked while facing the center.\nWith Gangplank R's 'Death's Daughter' enhancement, facing the fixed damage that falls in the center while using Braum's E(Shield) can very rarely nullify the damage. Most of the time it will only reduce damage.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Gangplank's Q."],
    },
    gangplank: {
      ko: [],
      en: [],
    },
  },
};
