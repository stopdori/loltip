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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 이블린 [[EMPOWERED]]E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 이블린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 이블린 W의 [[CHARM]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]].", "E [[STUN]] cannot interrupt Evelynn's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Evelynn's W [[CHARM]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Alistar's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
