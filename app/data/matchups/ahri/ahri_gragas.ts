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
      ko: ["아리 E의 [[CHARM]]으로 그라가스 E(배치기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Gragas's E (body slam) [[DASH]]."],
    },
    gragas: {
      ko: ["그라가스 E(배치기), R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Gragas's E and R [[AIRBORNE]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
