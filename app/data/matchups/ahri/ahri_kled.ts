// app/data/matchups/ahri/ahri_kled.ts
import type { MatchupSummary } from "../_types";

export const ahri_kled: MatchupSummary = {
  champs: ["ahri", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 클레드 승마폼 E를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Kled's mounted E"],
    },
    kled: {
      ko: ["클레드 Q의 [[GRAB]]으로 아리 R을 끊을 수 있음"],
      en: ["Kled's Q [[GRAB]] can interrupt Ahri's R"],
    },
  },
};
