// app/data/matchups/ambessa/ambessa_brand.ts
import type { MatchupSummary } from "../_types";

export const ambessa_brand: MatchupSummary = {
  champs: ["ambessa", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 브랜드 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Brand's Q [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
