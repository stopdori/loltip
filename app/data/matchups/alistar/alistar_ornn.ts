// app/data/matchups/alistar/alistar_ornn.ts
import type { MatchupSummary } from "../_types";

export const alistar_ornn: MatchupSummary = {
  champs: ["alistar", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 오른 E, R2의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 오른 Q R의 [[SLOW]], Q E R2의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Ornn's E and R2 [[DASH]].", "E [[STUN]] cannot interrupt Ornn's E or R2 [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Ornn's Q and R [[SLOW]], and Q, E, and R2 [[AIRBORNE]]."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
