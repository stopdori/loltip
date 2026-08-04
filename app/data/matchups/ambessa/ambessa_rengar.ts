// app/data/matchups/ambessa/ambessa_rengar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_rengar: MatchupSummary = {
  champs: ["ambessa", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 렝가 [[EMPOWERED]] E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Rengar's P and R [[DASH]].", "R [[UNSTOPPABLE]] can ignore Rengar's [[EMPOWERED]] E [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
