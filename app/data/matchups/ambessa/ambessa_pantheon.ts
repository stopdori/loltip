// app/data/matchups/ambessa/ambessa_pantheon.ts
import type { MatchupSummary } from "../_types";

export const ambessa_pantheon: MatchupSummary = {
  champs: ["ambessa", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 판테온 W, R(시전 집중)을 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 판테온 W의 [[STUN]]을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Pantheon's W and R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Pantheon's W [[STUN]].\nHowever, [[STUN]] still applies."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
