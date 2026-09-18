// app/data/matchups/ahri/ahri_gragas.ts
import type { MatchupSummary } from "../_types";

export const ahri_gragas: MatchupSummary = {
  champs: ["ahri", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]]) [[KNOCKDOWN]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]]) [[KNOCKDOWN]] can interrupt Gragas's E [[DASH]]. [[EXIST]]"],
    },
    gragas: {
      ko: ["그라가스 E, R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Gragas's E and R [[KNOCKBACK]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
