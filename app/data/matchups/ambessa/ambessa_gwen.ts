// app/data/matchups/ambessa/ambessa_gwen.ts
import type { MatchupSummary } from "../_types";

export const ambessa_gwen: MatchupSummary = {
  champs: ["ambessa", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 그웬 E를 끊을 수 있음"],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Gwen's E."],
    },
    gwen: {
      ko: ["그웬 W로 암베사 Q2, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W can avoid Ambessa's Q2 and R from outside the range"],
    },
  },
};
