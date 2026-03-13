// app/data/matchups/ambessa/ambessa_nami.ts
import type { MatchupSummary } from "../_types";

export const ambessa_nami: MatchupSummary = {
  champs: ["ambessa", "nami"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 나미 R을 넘어 갈 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 나미 Q의 [[SUSPENDING]], R의 [[AIRBORNE]]을 무시할 수 있음.\n단, [[SUSPENDING]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] allows passing over Nami's R.", "Ambessa's R [[UNSTOPPABLE]] can ignore Nami's Q [[SUSPENDING]] and R [[AIRBORNE]].\nHowever, [[SUSPENDING]] still applies."],
    },
    nami: {
      ko: [],
      en: [],
    },
  },
};
