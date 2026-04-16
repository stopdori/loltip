// app/data/matchups/ambessa/ambessa_quinn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_quinn: MatchupSummary = {
  champs: ["ambessa", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 퀸 E(공중제비)의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 퀸 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Quinn's E (somersault) [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Quinn's E [[KNOCKBACK]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
