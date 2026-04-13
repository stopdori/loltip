// app/data/matchups/ahri/ahri_kindred.ts
import type { MatchupSummary } from "../_types";

export const ahri_kindred: MatchupSummary = {
  champs: ["ahri", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 있음.", 
        "아리 E의 [[CHARM]]으로 킨드레드 R의 [[INVULNERABLE]] [[ZONE]] 밖으로 꺼낼 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Kindred's Q [[DASH]].", "Ahri's E [[CHARM]] can pull enemies outside Kindred's R [[INVULNERABLE]] [[ZONE]]."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
