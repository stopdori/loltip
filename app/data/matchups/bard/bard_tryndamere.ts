// app/data/matchups/bard/bard_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const bard_tryndamere: MatchupSummary = {
  champs: ["bard", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 트린다미어 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    tryndamere: {
      ko: ["트린다미어 W의 범위 내의 적군이 바드 R(존야)상태라면 W를 사용할 수 없음.", 
        "트란다미어 R을 바드 R(존야) 상태에서 사용할 수 없음."],
      en: [],
    },
  },
};
