// app/data/matchups/braum/braum_janna.ts
import type { MatchupSummary } from "../_types";

export const braum_janna: MatchupSummary = {
  champs: ["braum", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 잔나 평타, Q, W를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 잔나 평타, Q, W를 [[INTERCEPT_PROJECTILE]] 할 수 있음.\n단, 잔나 Q는 즉시 삭제되고, 데미지를 주지 않으며, [[AIRBORNE]]은 걸림", "브라움 Q의 [[STUN]], R의 [[AIRBORNE]]으로 잔나 R(채널링)을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Janna's basic attacks, Q and W.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Janna's basic attacks, Q and W.\nHowever, Janna's Q is instantly destroyed, deals no damage, but [[AIRBORNE]] still applies.", "Braum's Q [[STUN]] and R [[AIRBORNE]] can interrupt Janna's R (channeling)."],
    },
    janna: {
      ko: [],
      en: [],
    },
  },
};
