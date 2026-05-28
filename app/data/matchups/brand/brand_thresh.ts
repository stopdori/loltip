// app/data/matchups/brand/brand_thresh.ts
import type { MatchupSummary } from "../_types";

export const brand_thresh: MatchupSummary = {
  champs: ["brand", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Thresh's Q2 or W [[DASH]]. \n However, the [[STUN]] remains."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
