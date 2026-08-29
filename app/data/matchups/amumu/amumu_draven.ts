// app/data/matchups/amumu/amumu_draven.ts
import type { MatchupSummary } from "../_types";

export const amumu_draven: MatchupSummary = {
  champs: ["amumu", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 드레이븐 E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[CC_BUFFER]] can ignore Draven's E [[AIRBORNE]] and continue [[DASH]]."],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Amumu's Q [[DASH]]."],
    },
  },
};
