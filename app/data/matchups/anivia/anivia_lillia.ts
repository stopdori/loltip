// app/data/matchups/anivia/anivia_lillia.ts
import type { MatchupSummary } from "../_types";

export const anivia_lillia: MatchupSummary = {
  champs: ["anivia", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Lillia's W [[DASH]]."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
