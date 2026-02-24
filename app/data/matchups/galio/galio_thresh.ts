// app/data/matchups/galio/galio_thresh.ts
import type { MatchupSummary } from "../_types";

export const galio_thresh: MatchupSummary = {
  champs: ["galio", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: ["갈리오 E(돌진)가 쓰레쉬 E(마당쓸기)를 조건부로 무시 할수있음. 갈리오 E가 뒤로 이동할때 쓰레쉬 E에 맞으면 무시하고 빠져나감."],
      en: ["Galio E (dash) can conditionally negate Thresh E. If Galio is hit by Thresh’s E skill while moving backward during E, he ignores the grab and escapes."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
