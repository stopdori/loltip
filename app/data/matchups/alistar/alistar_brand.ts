// app/data/matchups/alistar/alistar_brand.ts
import type { MatchupSummary } from "../_types";

export const alistar_brand: MatchupSummary = {
  champs: ["alistar", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 브랜드 Q의 [[STUN]], R의 [[SLOW]]를 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Brand's Q [[STUN]] and R [[SLOW]]."],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
