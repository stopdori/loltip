// app/data/matchups/ambessa/ambessa_nocturne.ts
import type { MatchupSummary } from "../_types";

export const ambessa_nocturne: MatchupSummary = {
  champs: ["ambessa", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 녹턴 R2를 끊을 수 없음.", "암베사 R의 [[UNSTOPPABLE]]로 녹턴 E의 [[FEAR]]을 무시할 수 있음.\n단, [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot interrupt Nocturne's R2.", "Ambessa's R [[UNSTOPPABLE]] can ignore Nocturne's E [[FEAR]].\nHowever, [[FEAR]] still applies."],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
};
