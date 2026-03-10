// app/data/matchups/braum/braum_lillia.ts
import type { MatchupSummary } from "../_types";

export const braum_lillia: MatchupSummary = {
  champs: ["braum", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 릴리아 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 릴리아 P는 브라움 E(방패)에 막혀도 피해 감소 없음.\n단, 릴리아 Q의 가장자리에 맞으면 고정피해를 막을 수 없음.\n 단, 릴리아 W는 브라움 E(방패)로 중심 부분을 바라봐야 적용. 뿐만아니라 릴리아 방향을 바라봐도 대부분 적용(이때, 가장자리 끝 부분에서는 불가)", "브라움 E(방패)로 릴리아 E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 릴리아 E는 즉시 ''삭제''되어 피해도 없고 P도 발동하지 않음.", "릴리아 R의 [[SLEEP]] 추가 데미지는 '피해를 입힐 때' 발동.\n 따라서 브라움이 E(방패)를 릴리아 방향으로 써서 W, E 데미지를 무효화하면, [[SLEEP]] 추가 데미지도 발동되지 않음.", "브라움 P의 [[STUN]]로 릴리아 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 릴리아 W를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Lillia's basic attacks, Q, W, E and R.\nHowever, Lillia's P damage is not reduced even when blocked by Braum's E(Shield).\nHowever, the true damage from Lillia's Q edge cannot be blocked.\nHowever, Lillia's W requires facing toward the center to apply. Facing toward Lillia also works in most cases (except at the very edge).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Lillia's E.\nHowever, Lillia's E is instantly ''destroyed'' — no damage is dealt and P does not trigger.", "Lillia's R [[SLEEP]] bonus damage triggers on dealing damage.\nTherefore, if Braum nullifies W or E damage with E(Shield) facing Lillia, the [[SLEEP]] bonus damage is also prevented.", "Braum's P [[STUN]] cannot interrupt Lillia's W. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Lillia's W."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
