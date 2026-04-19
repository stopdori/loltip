// app/data/matchups/alistar/alistar_quinn.ts
import type { MatchupSummary } from "../_types";

export const alistar_quinn: MatchupSummary = {
  champs: ["alistar", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 퀸 E의 [[DASH]], R의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "알리스타 E의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 퀸 Q의 [[NEAR_SIGHT]], E의 [[SLOW]] [[AIRBORNE]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Quinn's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Quinn's Q [[NEAR_SIGHT]] and E [[SLOW]][[AIRBORNE]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
