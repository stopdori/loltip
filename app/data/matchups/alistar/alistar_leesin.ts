// app/data/matchups/alistar/alistar_leesin.ts
import type { MatchupSummary } from "../_types";

export const alistar_leesin: MatchupSummary = {
  champs: ["alistar", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 리신 Q2, W(방호)의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 리신 Q2, W(방호)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 리신 E2의 [[SLOW]], R의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Lee Sin's Q2 and W [[DASH]].", "E [[STUN]] cannot interrupt Lee Sin's Q2 and W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Lee Sin's E2 [[SLOW]] and R [[AIRBORNE]]."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
