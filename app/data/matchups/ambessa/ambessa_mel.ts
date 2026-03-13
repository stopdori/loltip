// app/data/matchups/ambessa/ambessa_mel.ts
import type { MatchupSummary } from "../_types";

export const ambessa_mel: MatchupSummary = {
  champs: ["ambessa", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 멜 R(시전 집중)을 끊을 수 없음.", "암베사 R의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음.\n단, [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot interrupt Mel's R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]].\nHowever, [[ROOT]] still applies."],
    },
    mel: {
      ko: [],
      en: [],
    },
  },
};
