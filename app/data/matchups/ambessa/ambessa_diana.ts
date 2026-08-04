// app/data/matchups/ambessa/ambessa_diana.ts
import type { MatchupSummary } from "../_types";

export const ambessa_diana: MatchupSummary = {
  champs: ["ambessa", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 다이애나 R의 [[GRAB]] 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Diana's E [[DASH]].", "R [[UNSTOPPABLE]] can ignore Diana's R [[GRAB]]."],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
