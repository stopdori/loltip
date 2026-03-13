// app/data/matchups/ambessa/ambessa_renekton.ts
import type { MatchupSummary } from "../_types";

export const ambessa_renekton: MatchupSummary = {
  champs: ["ambessa", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 레넥톤 E를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 레넥톤 W의 [[STUN]]을 무시할 수 있음.\n단, [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Renekton's E.", "Ambessa's R [[UNSTOPPABLE]] can ignore Renekton's W [[STUN]].\nHowever, [[STUN]] still applies."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
