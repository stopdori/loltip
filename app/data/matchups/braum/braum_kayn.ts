// app/data/matchups/braum/braum_kayn.ts
import type { MatchupSummary } from "../_types";

export const braum_kayn: MatchupSummary = {
  champs: ["braum", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 케인 평타, Q, W를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 케인 Q는 대쉬 공격을 막으면 회전공격 피해를 받음. 회전공격만 맞으면 무효화\n단, 케인 R은 막을([[DAMAGE_NULLIFY]]) 수 없음.", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 케인 E(벽이동)를 끊을 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kayn's basic attacks, Q and W.\nHowever, if Kayn's Q dash attack is blocked, the spin damage still applies. Only the spin alone is nullified.\nHowever, Kayn's R cannot be [[DAMAGE_NULLIFY]].", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Kayn's E (wall travel)."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
