// app/data/matchups/bard/bard_draven.ts
import type { MatchupSummary } from "../_types";

export const bard_draven: MatchupSummary = {
  champs: ["bard", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    draven: {
      ko: ["드레이븐이 Q(회전 도끼)를 받으려고 할 때, 바드 R(존야)의 [[STASIS]]에 걸린다면 \n Q를 받을 수 있음."],
      en: ["If Draven gets hit by Bard's R (like Zhonya's Hourglass) [[STASIS]] while trying to pick up his Q (Spinning Axe), \n he can still pick it up."],
    },
  },
};
