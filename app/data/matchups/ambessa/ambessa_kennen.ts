// app/data/matchups/ambessa/ambessa_kennen.ts
import type { MatchupSummary } from "../_types";

export const ambessa_kennen: MatchupSummary = {
  champs: ["ambessa", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 케넨 E, R 시전을 멈출 수 없음", "암베사 R의 [[UNSTOPPABLE]]로 케넨 P의 [[STUN]]을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] cannot stop Kennen's E and R casting.", "Ambessa's R [[UNSTOPPABLE]] can ignore Kennen's P [[STUN]].\nHowever, [[STUN]] still applies."],
    },
    kennen: {
      ko: [],
      en: [],
    },
  },
};
