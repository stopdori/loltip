// app/data/matchups/aatrox/aatrox_braum.ts
import type { MatchupSummary } from "../_types";

export const aatrox_braum: MatchupSummary = {
  champs: ["aatrox", "braum"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 브라움 W를 끊을 수 있음"],
      en: [],
    },
    braum: {
      ko: ["브라움 E로 아트록스 평타, Q, W를 [[DAMAGE_NULLIFY]] 할 수 있음.", "브라움 E로 아트록스 W를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, [[TETHER]] 효과는 남아있음", "브라움 P의 [[STUN]]로 아트록스 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아트록스 R을 끊을 수 있음"],
      en: [""],
    },
  },
};
