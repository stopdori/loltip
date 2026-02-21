// app/data/matchups/aatrox/aatrox_lillia.ts
import type { MatchupSummary } from "../_types";

export const aatrox_lillia: MatchupSummary = {
  champs: ["aatrox", "lillia"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 릴리아 W를 끊을 수 있음"],
      en: ["Aatrox's Q (sweet spot) or W pull can interrupt lillia's W"],
    },
    lillia: {
      ko: ["릴리아 R의 [[SLEEP]]으로 아트록스 E를 끊을 수 없음. 단, [[SLEEP]]는 남아있음"],
      en: [],
    },
  },
};
