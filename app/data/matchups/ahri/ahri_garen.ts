// app/data/matchups/ahri/ahri_garen.ts
import type { MatchupSummary } from "../_types";

export const ahri_garen: MatchupSummary = {
  champs: ["ahri", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [""],
      en: [""],
    },
    garen: {
      ko: ["가렌 Q의 [[SILENCE]]으로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]는 남아있음.", 
        "가렌 W의 [[TENACITY]]으로 아리 E의 [[CHARM]]의 지속시간을 줄일 수 있음."],
      en: ["Garen's Q [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies.", "If Garen uses W and gets hit by Ahri's E [[CHARM]], the increased [[TENACITY]] reduces the [[CHARM]] duration."],
    },
  },
};
