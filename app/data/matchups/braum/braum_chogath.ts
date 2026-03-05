// app/data/matchups/braum/braum_chogath.ts
import type { MatchupSummary } from "../_types";

export const braum_chogath: MatchupSummary = {
  champs: ["braum", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 초가스 평타, Q, W, E, R [[DAMAGE_NULLIFY]] 할 수 있음. 단, Q의 [[AIRBORNE]] [[STUN]], W의 [[SILENCE]]은 남아있음.", "브라움 E(방패)로 초가스 E를 [[INTERCEPT_PROJECTILE]] 할 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Cho'Gath's auto attacks, Q, W, E and R. However, Q's [[AIRBORNE]] [[STUN]] and W's [[SILENCE]] still apply", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Cho'Gath's E"],
    },
    chogath: {
      ko: [],
      en: [],
    },
  },
};
