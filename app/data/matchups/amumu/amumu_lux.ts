// app/data/matchups/amumu/amumu_lux.ts
import type { MatchupSummary } from "../_types";

export const amumu_lux: MatchupSummary = {
  champs: ["amumu", "lux"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 럭스 Q의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Lux's Q [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    lux: {
      ko: [],
      en: [],
    },
  },
};
