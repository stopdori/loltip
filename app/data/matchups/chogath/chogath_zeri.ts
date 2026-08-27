// app/data/matchups/chogath/chogath_zeri.ts
import type { MatchupSummary } from "../_types";

export const chogath_zeri: MatchupSummary = {
  champs: ["chogath", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 제리 E(일반, 벽이동)의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 제리 E(일반, 벽이동)의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Zeri's E and E (wall movement) [[DASH]].",
        "W [[SILENCE]] cannot interrupt Zeri's E and E (wall movement) [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
