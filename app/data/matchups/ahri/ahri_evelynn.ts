// app/data/matchups/ahri/ahri_evelynn.ts
import type { MatchupSummary } from "../_types";

export const ahri_evelynn: MatchupSummary = {
  champs: ["ahri", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 이블린 P의 [[CAMOUFLAGE]] 상태일 때 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]] while in [[CAMOUFLAGE]] (P state)."],
    },
    evelynn: {
      ko: ["이블린 W의 [[CHARM]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Evelynn's W [[CHARM]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
