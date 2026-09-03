// app/data/matchups/brand/brand_hecarim.ts
import type { MatchupSummary } from "../_types";

export const brand_hecarim: MatchupSummary = {
  champs: ["brand", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[STUN]] remains."],
    },
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 브랜드 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Brand's Q [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
