// app/data/matchups/ambessa/ambessa_bard.ts
import type { MatchupSummary } from "../_types";

export const ambessa_bard: MatchupSummary = {
  champs: ["ambessa", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 바드 E(벽이동)를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 바드 Q의 [[STUN]]을 무시할 수 있음.\n단, [[STUN]]은 남아있음.", "암베사 R의 [[UNSTOPPABLE]]로 바드 R(존야)를 무시할 수 있음!!."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Bard's E (wall movement).", "Ambessa's R [[UNSTOPPABLE]] can ignore Bard's Q [[STUN]].\nHowever, [[STUN]] still applies.", "Ambessa's R [[UNSTOPPABLE]] can ignore Bard's R (Zhonya effect)!!."],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
