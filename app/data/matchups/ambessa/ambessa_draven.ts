// app/data/matchups/ambessa/ambessa_draven.ts
import type { MatchupSummary } from "../_types";

export const ambessa_draven: MatchupSummary = {
  champs: ["ambessa", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 드레이븐 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Draven's E [[KNOCKBACK]]."],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 암베사 P의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Ambessa's P [[DASH]]."],
    },
  },
};
