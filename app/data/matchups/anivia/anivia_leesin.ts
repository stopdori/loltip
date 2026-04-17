// app/data/matchups/anivia/anivia_leesin.ts
import type { MatchupSummary } from "../_types";

export const anivia_leesin: MatchupSummary = {
  champs: ["anivia", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 리신 Q2, W(방호)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 리신 Q2, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Lee Sin's Q2 or W (Safeguard) [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Lee Sin's Q2 or W [[DASH]]."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
