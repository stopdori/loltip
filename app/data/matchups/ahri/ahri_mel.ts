// app/data/matchups/ahri/ahri_mel.ts
import type { MatchupSummary } from "../_types";

export const ahri_mel: MatchupSummary = {
  champs: ["ahri", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 멜 R의 을 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Mel's R. However, the [[CHARM]] still applies."],
    },
    mel: {
      ko: ["멜 W의 [[REFLECT]]로 아리 Q, W, E, R을 반사할 수 있음."],
      en: ["Mel's W [[REFLECT]] can reflect Ahri's Q, W, E, and R"],
    },
  },
};
