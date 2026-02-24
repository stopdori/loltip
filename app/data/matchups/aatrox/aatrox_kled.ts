// app/data/matchups/aatrox/aatrox_kled.ts
import type { MatchupSummary } from "../_types";

export const aatrox_kled: MatchupSummary = {
  champs: ["aatrox", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W [[GRAB]]효과로 클레드 E를 막을 수 있음\n아트록스 W를 클레드 승마폼에 맞히고 낙마를 시킨다면, 효과가 유지됨"],
      en: ["Aatrox's Q (sweet spot) or W pull can stop Kled's E\nIf Aatrox hits W on mounted Kled and he dismounts, the effect remains active"],
    },
    kled: {
      ko: ["클레드 Q의 [[GRAB]], R의 [[KNOCKBACK]]으로 아트록스 E를 끊을 수 있음"],
      en: [],
    },
  },
};
