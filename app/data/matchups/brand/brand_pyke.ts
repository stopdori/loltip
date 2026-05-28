// app/data/matchups/brand/brand_pyke.ts
import type { MatchupSummary } from "../_types";

export const brand_pyke: MatchupSummary = {
  champs: ["brand", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브랜드 Q의 [[STUN]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Pyke's E [[DASH]]. \n However, the [[STUN]] remains.",
        "Brand's Q [[STUN]] can interrupt Pyke's Q [[SKILL_CHARGED]]."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
