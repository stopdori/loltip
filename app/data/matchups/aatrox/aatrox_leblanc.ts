// app/data/matchups/aatrox/aatrox_leblanc.ts
import type { MatchupSummary } from "../_types";

export const aatrox_leblanc: MatchupSummary = {
  champs: ["aatrox", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 르블랑 W를 끊을 수 있음"],
      en: ["Aatrox's Q (sweet spot) or W pull can interrupt LeBlanc's W"],
    },
    leblanc: {
      ko: ["르블랑 E의 [[ROOT]]으로 아트록스 E를 끊을 수 없음. 단, [[ROOT]]는 남아있음"],
      en: [],
    },
  },
};
