// app/data/matchups/brand/brand_briar.ts
import type { MatchupSummary } from "../_types";

export const brand_briar: MatchupSummary = {
  champs: ["brand", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["Q의 [[STUN]]로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Briar's Q or W [[DASH]]. \n However, the [[STUN]] remains."],
    },
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 브랜드 Q의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 브랜드 Q의 [[STUN]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Brand's Q [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Brand's Q [[STUN]]."],
    },
  },
};
