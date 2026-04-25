// app/data/matchups/bard/bard_maokai.ts
import type { MatchupSummary } from "../_types";

export const bard_maokai: MatchupSummary = {
  champs: ["bard", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    maokai: {
      ko: ["마오카이 W의 [[ROOT]]으로 바드 E(벽이동)을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음.", 
        "마오카이 W의 [[UNTARGETABLE]]로 바드 R(존야)을 무시할 수 있음."],
      en: [],
    },
  },
};
