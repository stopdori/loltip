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
      ko: ["아리 E의 [[CHARM]]으로 브라움 W의 [[DASH]]을 끊을 수 있음.", "아리 E의 [[CHARM]]으로 브라움 R의 [[CAST_COMMIT]]을 무시할 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Braum's W", "Ahri's E [[CHARM]] cannot stop Braum's R [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    braum: {
      ko: ["브라움 E(방패)로 아리 평타, Q, W(최초 1개), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 아리 평타, Q, W, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 아리 Q는 즉시 ''삭제''되어 처음 피해만 받고 고정피해는 무효.\n단, 아리 E의 [[CHARM]]은 남아있음.", "브라움 P의 [[STUN]]로 아리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Braum's E (Shield) can [[DAMAGE_NULLIFY]] Ahri's basic attacks, Q, W (first projectile only), E, and R.", "Braum's E (Shield) can [[INTERCEPT_PROJECTILE]] Ahri's basic attacks, Q, W, E, and R.\nHowever, Ahri's Q is instantly destroyed, dealing only the initial damage (return damage is negated).\nHowever, Ahri's E [[CHARM]] still applies.", "Braum's P [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Ahri's R"],
    },
  },
};
