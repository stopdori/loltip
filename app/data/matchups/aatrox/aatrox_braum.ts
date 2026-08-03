// app/data/matchups/aatrox/aatrox_braum.ts
import type { MatchupSummary } from "../_types";

export const aatrox_braum: MatchupSummary = {
  champs: ["aatrox", "braum"],
  summary: {
    ko: ["아트록스 W 브라움이 방패로 막으면 W효과가 남아있음"],
    en: ["Aatrox's W persists even if Braum blocks it with his E."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[STUN]], W의 [[GRAB]] 효과로 브라움 W를 끊을 수 있음."],
      en: ["Q [[STUN]] and W's [[GRAB]] effect can interrupt Braum's W."],
    },
    braum: {
      ko: ["브라움 E(방패)로 아트록스 평타, Q, W를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 아트록스 W를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, [[TETHER]] 효과는 남아있음.", "브라움 P의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Braum's E (Shield) can [[DAMAGE_NULLIFY]] Aatrox's basic attacks, Q, and W.", "Braum's E (Shield) can [[INTERCEPT_PROJECTILE]] Aatrox's W, but the [[TETHER]] effect remains.", "Braum's P [[STUN]] cannot interrupt Aatrox's E [[DASH]]. \n However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Aatrox's E [[DASH]]."],
    },
  },
};
