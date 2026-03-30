// app/data/matchups/ahri/ahri_azir.ts
import type { MatchupSummary } from "../_types";

export const ahri_azir: MatchupSummary = {
  champs: ["ahri", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E can interrupt Azir's E"],
    },
    azir: {
      ko: ["아지르 R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R can interrupt Ahri's R"],
    },
  },
};
