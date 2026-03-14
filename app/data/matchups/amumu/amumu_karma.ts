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
      ko: ["아무무 Q로 카르마 W의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q is affected by Karma's W [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]] remains active."],
    },
    karma: {
      ko: [],
      en: [],
    },
  },
};
