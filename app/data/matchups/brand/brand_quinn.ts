// app/data/matchups/brand/brand_quinn.ts
import type { MatchupSummary } from "../_types";

export const brand_quinn: MatchupSummary = {
  champs: ["brand", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
