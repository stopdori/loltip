// app/data/matchups/alistar/alistar_irelia.ts
import type { MatchupSummary } from "../_types";

export const alistar_irelia: MatchupSummary = {
  champs: ["alistar", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음. \n 난이도가 많이 어려움.", 
        "E의 [[STUN]]로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 이렐리아 E의 [[STUN]], R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Irelia's Q [[DASH]]. \n Very difficult to time.", "E [[STUN]] cannot interrupt Irelia's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Irelia's E [[STUN]] and R [[SLOW]]."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
