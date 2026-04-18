// app/data/matchups/ambessa/ambessa_annie.ts
import type { MatchupSummary } from "../_types";

export const ambessa_annie: MatchupSummary = {
  champs: ["ambessa", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[UNSTOPPABLE]]로 애니 P의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[UNSTOPPABLE]] can ignore Annie's P [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    annie: {
      ko: ["애니 P의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
