// app/data/matchups/amumu/amumu_karma.ts
import type { MatchupSummary } from "../_types";

export const amumu_karma: MatchupSummary = {
  champs: ["amumu", "karma"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 카르마 W의 [[ROOT]]을 무시하고 [[DASH]]할 수 없음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] cannot ignore Karma's W [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    karma: {
      ko: [],
      en: [],
    },
  },
};
