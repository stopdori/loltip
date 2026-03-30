// app/data/matchups/ahri/ahri_draven.ts
import type { MatchupSummary } from "../_types";

export const ahri_draven: MatchupSummary = {
  champs: ["ahri", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 드레이븐 R의 [[CAST_COMMIT]]를 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Draven's R [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    draven: {
      ko: ["드레이븐 E로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Draven's E can interrupt Ahri's R"],
    },
  },
};
