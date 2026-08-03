// app/data/matchups/ahri/ahri_elise.ts
import type { MatchupSummary } from "../_types";

export const ahri_elise: MatchupSummary = {
  champs: ["ahri", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Elise's spider form Q [[DASH]]."],
    },
    elise: {
      ko: ["엘리스 거미폼 새끼거미 [[SUMMON]]으로 아리 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Elise's spider form spiderlings [[SUMMON]] can block Ahri's E [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
