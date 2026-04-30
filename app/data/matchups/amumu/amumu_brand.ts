// app/data/matchups/amumu/amumu_brand.ts
import type { MatchupSummary } from "../_types";

export const amumu_brand: MatchupSummary = {
  champs: ["amumu", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 브랜드 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Brand's Q [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] effect still applies."],
    },
  },
};
