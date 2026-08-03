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
      ko: ["E의 [[CHARM]]으로 클레드 승마폼 E, 낙마폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Kled's mounted form E and dismounted form Q [[DASH]]."],
    },
    kled: {
      ko: ["클레드 Q의 [[GRAB]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Kled's Q [[GRAB]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
