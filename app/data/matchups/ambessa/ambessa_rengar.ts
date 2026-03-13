// app/data/matchups/ambessa/ambessa_rengar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_rengar: MatchupSummary = {
  champs: ["ambessa", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 렝가 P(점프)를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 렝가 E(강화)의 [[ROOT]]을 무시할 수 있음.\n단, [[ROOT]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Rengar's P (jump).", "Ambessa's R [[UNSTOPPABLE]] can ignore Rengar's E (empowered) [[ROOT]].\nHowever, [[ROOT]] still applies."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
