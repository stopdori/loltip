// app/data/matchups/ahri/ahri_leblanc.ts
import type { MatchupSummary } from "../_types";

export const ahri_leblanc: MatchupSummary = {
  champs: ["ahri", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 르블랑 W를 끊을 수 있음."],
      en: ["Ahri's E can interrupt LeBlanc's W"],
    },
    leblanc: {
      ko: ["르블랑 E의 [[ROOT]]로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[ROOT]]은 남아있음."],
      en: ["LeBlanc's E [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
    },
  },
};
