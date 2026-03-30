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
      ko: ["아리 E의 [[CAHRM]]으로 그라가스 E(배치기)를 끊을 수 있음.", "아리 E의 [[CHARM]]으로 그라가스 W의 [[CAST_COMMIT]]을 끊을 수 없음."],
      en: ["Ahri's E can interrupt Gragas's E", "Ahri's E [[CHARM]] cannot interrupt Gragas's W [[CAST_COMMIT]]."],
    },
    gragas: {
      ko: ["그라가스 E(배치기), R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Gragas's E and R can interrupt Ahri's R"],
    },
  },
};
