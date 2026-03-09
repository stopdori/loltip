// app/data/matchups/ahri/ahri_diana.ts
import type { MatchupSummary } from "../_types";

export const ahri_diana: MatchupSummary = {
  champs: ["ahri", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 다이애나 E를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Diana's E"],
    },
    diana: {
      ko: ["다이애나 R로 아리 R을 끊을 수 있음"],
      en: ["Diana's R can interrupt Ahri's R"],
    },
  },
};
