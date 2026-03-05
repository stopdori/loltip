// app/data/matchups/bard/bard_braum.ts
import type { MatchupSummary } from "../_types";

export const bard_braum: MatchupSummary = {
  champs: ["bard", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 바드 평타, Q를 [[DAMAGE_NULLIFY]], [[INTERCEPT_PROJECTILE]] 할 수 있음.\nQ는 브라움이 앞에서 방패로 막으면 뒤로는 관통이 없음.\n브라움이 바드의 관통한 Q를 방패로 막으면 둘다 [[STUN]]이 걸림."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] and [[INTERCEPT_PROJECTILE]] against Bard's basic attacks and Q\\nIf Braum blocks Q with his shield from the front, it does not pierce through\\nIf Braum blocks a piercing Q, both targets are [[STUN]]ned"],
    },
  },
};
