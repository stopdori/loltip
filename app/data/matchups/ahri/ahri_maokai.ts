// app/data/matchups/ahri/ahri_maokai.ts
import type { MatchupSummary } from "../_types";

export const ahri_maokai: MatchupSummary = {
  champs: ["ahri", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CAHRM]]으로 마오카이 Q의 [[CAST_COMMIT]] 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Maokai's Q [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    maokai: {
      ko: ["마오카이 W, R의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[ROOT]]은 남아있음"],
      en: ["Maokai's W [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
    },
  },
};
