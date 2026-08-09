// app/data/matchups/anivia/anivia_ivern.ts
import type { MatchupSummary } from "../_types";

export const anivia_ivern: MatchupSummary = {
  champs: ["anivia", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 아이번 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아이번 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Ivern's Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Ivern's Q [[DASH]]."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
