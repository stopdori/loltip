// app/data/matchups/alistar/alistar_zac.ts
import type { MatchupSummary } from "../_types";

export const alistar_zac: MatchupSummary = {
  champs: ["alistar", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 자크 Q, E의 [[SLOW]] / Q, E, R의 [[AIRBORNE]]을 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 자크 Q의 [[TETHER]]을 해제할 수 없음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Zac's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Zac's E [[SKILL_CHARGED]].", "Alistar's R [[CC_CLEANSE]] can cleanse Zac's Q and E [[SLOW]], and Q, E, and R [[AIRBORNE]].", "Alistar's R [[CC_CLEANSE]] cannot cleanse Zac's Q [[TETHER]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
