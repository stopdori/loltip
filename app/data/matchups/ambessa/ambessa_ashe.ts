// app/data/matchups/ambessa/ambessa_ashe.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ashe: MatchupSummary = {
  champs: ["ambessa", "ashe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 애쉬 R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Ashe's R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    ashe: {
      ko: ["R의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
