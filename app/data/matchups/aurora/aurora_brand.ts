// app/data/matchups/aurora/aurora_brand.ts
import type { MatchupSummary } from "../_types";

export const aurora_brand: MatchupSummary = {
  champs: ["aurora", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 브랜드 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["E (ready phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Brand's Q [[STUN]] and continue [[DASH]]ing. \n However, the [[STUN]] still applies."],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
