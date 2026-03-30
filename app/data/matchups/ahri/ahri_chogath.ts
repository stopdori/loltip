// app/data/matchups/ahri/ahri_chogath.ts
import type { MatchupSummary } from "../_types";

export const ahri_chogath: MatchupSummary = {
  champs: ["ahri", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["초가스 Q의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "초가스 W의 [[SILENCE]]으로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[SILENCE]]은 남아있음."],
      en: ["Cho'Gath's Q can interrupt Ahri's R\nCho'Gath's W [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies."],
    },
  },
};
