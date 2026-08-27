// app/data/matchups/ambessa/ambessa_lillia.ts
import type { MatchupSummary } from "../_types";

export const ambessa_lillia: MatchupSummary = {
  champs: ["ambessa", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 릴리아 R의 [[SLEEP]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SLEEP]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted.", "R [[UNSTOPPABLE]] can ignore Lillia's R [[SLEEP]]. \n However, the [[SLEEP]] still applies after [[UNSTOPPABLE]] ends."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
