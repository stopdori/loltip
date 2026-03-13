// app/data/matchups/ambessa/ambessa_shyvana.ts
import type { MatchupSummary } from "../_types";

export const ambessa_shyvana: MatchupSummary = {
  champs: ["ambessa", "shyvana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 쉬바나 R을 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 쉬바나 R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Shyvana's R.", "Ambessa's R [[UNSTOPPABLE]] can ignore Shyvana's R [[AIRBORNE]]."],
    },
    shyvana: {
      ko: [],
      en: [],
    },
  },
};
