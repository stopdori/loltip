// app/data/matchups/galio/galio_pyke.ts
import type { MatchupSummary } from "../_types";

export const galio_pyke: MatchupSummary = {
  champs: ["galio", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: ["갈리오 E(돌진)가 파이크 Q(그랩)를 조건부로 무시 할수있음. 갈리오 E가 뒤로 이동할때 파이크 그랩에 맞으면 무시하고 빠져나감."],
      en: ["Galio E (dash) can conditionally negate Pyke Q (grab). If Galio is hit by Pyke’s grab while moving backward during E, he ignores the grab and escapes."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
