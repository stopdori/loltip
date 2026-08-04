// app/data/matchups/alistar/alistar_lillia.ts
import type { MatchupSummary } from "../_types";

export const alistar_lillia: MatchupSummary = {
  champs: ["alistar", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 릴리아 E의 [[SLOW]], R의 [[SLEEP]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Lillia's W [[DASH]].", "E [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Lillia's E [[SLOW]] and R [[SLEEP]]."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
