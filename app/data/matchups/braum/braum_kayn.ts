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
      ko: ["E(방패)로 케인 평타, Q, W를 막을([[DAMAGE_NULLIFY]]) 수 있음. [[EXIST]]\n단, 케인 Q는 대쉬 공격을 막으면 회전공격 피해를 받음. 회전공격만 맞으면 무효화\n단, 케인 R은 막을([[DAMAGE_NULLIFY]]) 수 없음.", 

      "P의 [[STUN]]로 케인 Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]", 

      "P의 [[STUN]], R의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 

      "R의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E (Shield) can block ([[DAMAGE_NULLIFY]]) Kayn's basic attacks, Q, and W. [[EXIST]]\nHowever, if Kayn's Q dash attack is blocked, the spin attack still deals damage. If only the spin attack hits, it is nullified.\nHowever, Kayn's R cannot be blocked ([[DAMAGE_NULLIFY]]).",

      "P [[STUN]] cannot interrupt Kayn's Q (dash phase) [[DASH]]. [[NOT_EXIST]]",

      "P [[STUN]] and R [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]",

      "R [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
