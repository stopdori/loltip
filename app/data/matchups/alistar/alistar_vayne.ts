// app/data/matchups/alistar/alistar_vayne.ts
import type { MatchupSummary } from "../_types";

export const alistar_vayne: MatchupSummary = {
  champs: ["alistar", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 베인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 베인 E의 [[KNOCKBACK]] [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Vayne's Q [[DASH]].", "E [[STUN]] cannot interrupt Vayne's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Vayne's E [[KNOCKBACK]][[STUN]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
