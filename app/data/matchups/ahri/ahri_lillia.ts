// app/data/matchups/ahri/ahri_lillia.ts
import type { MatchupSummary } from "../_types";

export const ahri_lillia: MatchupSummary = {
  champs: ["ahri", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 릴리아 W의 [[DASH]]를 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Lillia's W [[DASH]]."],
    },
    lillia: {
      ko: ["릴리아 R의 [[SLEEP]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["Lillia's R [[SLEEP]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[SLEEP]] still applies."],
    },
  },
};
