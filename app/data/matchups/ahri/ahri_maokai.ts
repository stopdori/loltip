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
      ko: [],
      en: [],
    },
    maokai: {
      ko: ["마오카이 W, R의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음"],
      en: ["Maokai's W and R [[ROOT]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
  },
};
