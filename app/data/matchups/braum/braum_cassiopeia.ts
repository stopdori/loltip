// app/data/matchups/braum/braum_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const braum_cassiopeia: MatchupSummary = {
  champs: ["braum", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카시오페아 평타, E, R [[DAMAGE_NULLIFY]] 할 수 있음. 단, R의 [[STUN]]은 남아있음.", "브라움 E(방패)로 카시오페아 평타, W, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, W는 사라지지 않고 브라움 방패에 막혀 바닥에 깔림", "브라움 E로 카시오페아 R을 [[INTERCEPT_PROJECTILE]] 할 수 없음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Cassiopeia's auto attacks, E and R. However, R's [[STUN]] still applies", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Cassiopeia's auto attacks, W and E\\nHowever, W does not disappear but is blocked by Braum's shield and lands on the ground", "Braum's E(Shield) cannot [[INTERCEPT_PROJECTILE]] Cassiopeia's R"],
    },
    cassiopeia: {
      ko: [],
      en: [],
    },
  },
};
