// app/data/matchups/ambessa/ambessa_skarner.ts
import type { MatchupSummary } from "../_types";

export const ambessa_skarner: MatchupSummary = {
  champs: ["ambessa", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[UNSTOPPABLE]]로 스카너 E, R의 [[SUPPRESS]]를 무시할 수 있음. [[EXIST]]"],
      en: ["R [[SUPPRESS]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[UNSTOPPABLE]] can ignore Skarner's E and R [[SUPPRESS]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
