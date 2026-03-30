// app/data/matchups/ahri/ahri_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const ahri_mordekaiser: MatchupSummary = {
  champs: ["ahri", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CAHRM]]으로 모데카이저 Q, E의 [[CAST_COMMIT]] 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Mordekaiser's Q or E [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    mordekaiser: {
      ko: ["모데카이저 E의 [[GRAB]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Mordekaiser's E can interrupt Ahri's R"],
    },
  },
};
