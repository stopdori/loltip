// app/data/matchups/ambessa/ambessa_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const ambessa_fiddlesticks: MatchupSummary = {
  champs: ["ambessa", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 피들스틱 Q의 [[FEAR]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Fiddlesticks's W [[SKILL_CHANNEL]] and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Fiddlesticks's Q [[FEAR]]. \n However, the [[FEAR]] still applies after [[UNSTOPPABLE]] ends."],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
