// app/data/matchups/ambessa/ambessa_tristana.ts
import type { MatchupSummary } from "../_types";

export const ambessa_tristana: MatchupSummary = {
  champs: ["ambessa", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 트타 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 트타 R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Tristana's W [[DASH]].", "R [[UNSTOPPABLE]] can ignore Tristana's R [[KNOCKBACK]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
