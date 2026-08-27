// app/data/matchups/chogath/chogath_smolder.ts
import type { MatchupSummary } from "../_types";

export const chogath_smolder: MatchupSummary = {
  champs: ["chogath", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."
      ],
      en: ["Q [[AIRBORNE]] can interrupt Smolder's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Smolder's E (wall movement) [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
