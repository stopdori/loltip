// app/data/matchups/ambessa/ambessa_vex.ts
import type { MatchupSummary } from "../_types";

export const ambessa_vex: MatchupSummary = {
  champs: ["ambessa", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 벡스 R2를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 벡스 P의[[FEAR]]를 무시할 수 있음.\n단, [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Vex's R2.", "Ambessa's R [[UNSTOPPABLE]] can ignore Vex's P [[FEAR]].\nHowever, [[FEAR]] still applies."],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
