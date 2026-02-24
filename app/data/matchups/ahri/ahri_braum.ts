// app/data/matchups/ahri/ahri_braum.ts
import type { MatchupSummary } from "../_types";

export const ahri_braum: MatchupSummary = {
  champs: ["ahri", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 브라움 W를 끊을 수 있음"],
      en: [],
    },
    braum: {
      ko: ["브라움 E로 아리 평타, Q, W, E, R을 [[DAMAGE_NULLIFY]] 할 수 있음.\n단, W는 최초 타격되는 투사체 1개만", "브라움 E로 아리의 평타, Q, W, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, E의 [[CHARM]]은 남아있음.", "브라움 P의 [[STUN]]로 아리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아리 R을 끊을 수 있음"],
      en: [""],
    },
  },
};
