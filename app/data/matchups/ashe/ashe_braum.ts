// app/data/matchups/ashe/ashe_braum.ts
import type { MatchupSummary } from "../_types";

export const ashe_braum: MatchupSummary = {
  champs: ["ashe", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 애쉬 평타, Q(평타), W, R을 막고([[DAMAGE_NULLIFY]]), [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 애쉬 R은 브라움이 데미지를 입지 않고 [[STUN]]이 걸림\n애쉬 R의 범위피해는 아군에게 유효"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] and [[INTERCEPT_PROJECTILE]] against Ashe's basic attacks, Q (basic attacks), W and R\\nHowever, Braum takes no damage from Ashe's R but is [[STUN]]ned\\nAshe's R area damage still applies to allies"],
    },
  },
};
