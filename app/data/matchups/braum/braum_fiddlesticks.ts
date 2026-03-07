// app/data/matchups/braum/braum_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const braum_fiddlesticks: MatchupSummary = {
  champs: ["braum", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 피들스틱 평타, Q, W(최초 한틱), E, R(최초 한틱)을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, Q, R(시야밖 등장)의 [[FAER]]는 남아있음", "브라움 E(방패)로 피들스틱 평타, Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, Q의 [[FEAR]]은 남아있음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 피들스틱 R의 (시전집중)을 끊을 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Fiddlesticks's basic attacks, Q, W (first tick), E, and R (first tick)\\nHowever, [[FEAR]] from Q and R (appearing from outside vision) still applies", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] against Fiddlesticks's basic attacks and Q\\nHowever, Q's [[FEAR]] still applies", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Fiddlesticks's R (channeling)"],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
