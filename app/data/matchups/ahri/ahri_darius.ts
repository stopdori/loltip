// app/data/matchups/ahri/ahri_darius.ts
import type { MatchupSummary } from "../_types";

export const ahri_darius: MatchupSummary = {
  champs: ["ahri", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 다리우스 Q, R을 끊을 수 없음. 단, [[CHARM]]은 남아있음"],
      en: ["Ahri's E [[CHARM]] cannot interrupt Darius's Q or R. However, the [[CHARM]] still applies."],
    },
    darius: {
      ko: ["다리우스 E로 아리 R을 끊을 수 있음"],
      en: ["Darius's E can interrupt Ahri's R"],
    },
  },
};
