// app/data/matchups/ambessa/ambessa_galio.ts
import type { MatchupSummary } from "../_types";

export const ambessa_galio: MatchupSummary = {
  champs: ["ambessa", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 갈리오 W의 [[TAUNT]], E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[TAUNT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Galio's W [[TAUNT]], E [[DASH]], and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Galio's W [[TAUNT]], and E and R [[AIRBORNE]]. \n However, the [[TAUNT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
