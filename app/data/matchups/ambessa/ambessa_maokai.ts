// app/data/matchups/ambessa/ambessa_maokai.ts
import type { MatchupSummary } from "../_types";

export const ambessa_maokai: MatchupSummary = {
  champs: ["ambessa", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 마오카이 Q의 [[KNOCKBACK]], W의 [[ROOT]], R의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Maokai's Q [[KNOCKBACK]], W [[ROOT]], and R [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
