// app/data/matchups/aatrox/aatrox_ksante.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ksante: MatchupSummary = {
  champs: ["aatrox", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 크산테 E를 끊을 수 있음"],
      en: ["Aatrox's Q (sweet spot) or W pull can interrupt K'Sante's E"],
    },
    ksante: {
      ko: ["크산테 Q3, 일반폼 W차징, R로 아트록스 E를 끊을 수 있음", "크산테 W 차징효과로 아트록스 Q끝, W [[GRAB]]효과를 무시할 수 있음"],
      en: [],
    },
  },
};
