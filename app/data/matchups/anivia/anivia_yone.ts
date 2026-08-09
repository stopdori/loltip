// app/data/matchups/anivia/anivia_yone.ts
import type { MatchupSummary } from "../_types";

export const anivia_yone: MatchupSummary = {
  champs: ["anivia", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 요네 Q3, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Yone's Q3 or E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Yone's Q3 or E1 [[DASH]]."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
