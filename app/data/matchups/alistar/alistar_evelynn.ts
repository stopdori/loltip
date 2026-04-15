// app/data/matchups/alistar/alistar_evelynn.ts
import type { MatchupSummary } from "../_types";

export const alistar_evelynn: MatchupSummary = {
  champs: ["alistar", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 이블린 [[EMPOWERED]]E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 이블린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 이블린 W의 [[CHARM]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Evelynn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Evelynn's W [[CHARM]]."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
