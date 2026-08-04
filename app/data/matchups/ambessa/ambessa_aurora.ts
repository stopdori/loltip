// app/data/matchups/ambessa/ambessa_aurora.ts
import type { MatchupSummary } from "../_types";

export const ambessa_aurora: MatchupSummary = {
  champs: ["ambessa", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Aurora's W and E [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, 암베사 R이 적중조차 하지 않음."],
      en: [],
    },
  },
};
