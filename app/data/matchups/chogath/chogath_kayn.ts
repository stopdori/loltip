// app/data/matchups/chogath/chogath_kayn.ts
import type { MatchupSummary } from "../_types";

export const chogath_kayn: MatchupSummary = {
  champs: ["chogath", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 케인, 그암, 다르킨 Q, E(벽이동)의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 케인, 그암, 다르킨 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Kayn's (base, Shadow Assassin, Darkin) Q and E (wall movement) [[DASH]].",
        "W [[SILENCE]] cannot interrupt Kayn's (base, Shadow Assassin, Darkin) Q and E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
