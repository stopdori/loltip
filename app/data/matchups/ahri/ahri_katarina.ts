// app/data/matchups/ahri/ahri_katarina.ts
import type { MatchupSummary } from "../_types";

export const ahri_katarina: MatchupSummary = {
  champs: ["ahri", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 카타리나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Katarina's R [[SKILL_CHANNEL]]."],
    },
    katarina: {
      ko: ["카타리나 Q의 [[DROP]](단검)이 아리 R의 [[DASH]]을 따라가서 떨어질 수 있음."],
      en: ["Katarina's Q [[DROP]] (dagger) can follow and land along Ahri's R [[DASH]]."],
    },
  },
};
