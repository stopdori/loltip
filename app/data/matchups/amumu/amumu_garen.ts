// app/data/matchups/amumu/amumu_garen.ts
import type { MatchupSummary } from "../_types";

export const amumu_garen: MatchupSummary = {
  champs: ["amumu", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 가렌 Q의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Garen's Q [[SILENCE]] and continue [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    garen: {
      ko: [],
      en: [],
    },
  },
};
