// app/data/matchups/anivia/anivia_kindred.ts
import type { MatchupSummary } from "../_types";

export const anivia_kindred: MatchupSummary = {
  champs: ["anivia", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kindred's Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Kindred's Q [[DASH]]."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
