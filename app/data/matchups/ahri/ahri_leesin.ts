// app/data/matchups/ahri/ahri_leesin.ts
import type { MatchupSummary } from "../_types";

export const ahri_leesin: MatchupSummary = {
  champs: ["ahri", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 리신 Q2, W(방호)의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Lee Sin's Q2 and W (shield) [[DASH]]. [[EXIST]]"],
    },
    leesin: {
      ko: ["리신 R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Lee Sin's R [[KNOCKBACK]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
