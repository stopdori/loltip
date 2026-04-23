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
      ko: ["바드 Q의 [[STUN]]로 브라움 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 브라움 W의 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 바드 평타, Q를 막고([[DAMAGE_NULLIFY]]), [[INTERCEPT_PROJECTILE]] 할 수 있음.\nQ는 브라움이 앞에서 방패로 막으면 뒤로는 관통이 없음.\n브라움이 바드의 관통한 Q를 방패로 막으면 둘다 [[STUN]]이 걸림.", "브라움 P의 [[STUN]]로 바드 E(터널)를 끊을 수 없음. 단, [[STUN]]은 남아있음", 
      "브라움 E(방패)를 든 상태에서 바드 R(존야)을 맞으면 방패 효과가 작동하지 않음.", "브라움 R의 [[AIRBORNE]]으로 바드 E(터널)을 끊을 수 있음", 
      ],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] and [[INTERCEPT_PROJECTILE]] against Bard's basic attacks and Q\\nIf Braum blocks Q with his shield from the front, it does not pierce through\\nIf Braum blocks a piercing Q, both targets are [[STUN]]ned", "Braum's P [[STUN]] cannot interrupt Bard's E (wall-travel). However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Bard's E (wall-travel)."],
    },
  },
};
