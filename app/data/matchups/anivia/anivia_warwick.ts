// app/data/matchups/anivia/anivia_warwick.ts
import type { MatchupSummary } from "../_types";

export const anivia_warwick: MatchupSummary = {
  champs: ["anivia", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    warwick: {
      ko: ["애니비아 Q의 [[STUN]]로 워윅 Q, R의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 워윅 Q, R의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Warwick's Q or R [[UNSTOPPABLE]] [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] cannot interrupt Warwick's Q or R [[UNSTOPPABLE]] [[DASH]]."],
    },
  },
};
