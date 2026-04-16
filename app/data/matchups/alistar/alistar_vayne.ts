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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 베인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 베인 E의 [[KNOCKBACK]] [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Vayne's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Vayne's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Vayne's E [[KNOCKBACK]][[STUN]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
