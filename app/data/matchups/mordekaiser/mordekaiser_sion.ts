// app/data/matchups/mordekaiser/mordekaiser_sion.ts
import type { MatchupSummary } from "../_types";

export const mordekaiser_sion: MatchupSummary = {
  champs: ["mordekaiser", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mordekaiser: {
      ko: [""],
      en: [""],
    },
    sion: {
      ko: ["사이온 Q 차징중에 모데카이저 R을 사용하면, 사이온 Q는 여전히 유지되지만 아무런 효과도 없음.\n 사이온 Q 차징중에 모데카이저 R이 끝나면, 사이온 Q는 여전히 유지되지만 아무런 효과도 없음.", "사이온 R의 [[CC_IMMUNE]]으로 모데카이저 R을 무시할 수 있음.\n즉, 이세계로 가지 않음. 모데 R 쿨타임 소모."],
      en: ["If Mordekaiser uses R while Sion is charging Q, Sion's Q is still held but has no effect.\n If Mordekaiser's R ends while Sion is charging Q, Sion's Q is still held but has no effect."],
    },
  },
};
