// app/data/matchups/ambessa/ambessa_senna.ts
import type { MatchupSummary } from "../_types";

export const ambessa_senna: MatchupSummary = {
  champs: ["ambessa", "senna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 세나 R(시전 집중)을 끊을 수 없음.", "암베사 R의 [[UNSTOPPABLE]]로 세나 W의 [[ROOT]]을 무시할 수 있음.\n단, 세나 W의 [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot interrupt Senna's R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Senna's W [[ROOT]].\nHowever, Senna's W [[ROOT]] still applies."],
    },
    senna: {
      ko: [],
      en: [],
    },
  },
};
