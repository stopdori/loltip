// app/data/matchups/hecarim/hecarim_rengar.ts
import type { MatchupSummary } from "../_types";

export const hecarim_rengar: MatchupSummary = {
  champs: ["hecarim", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 렝가 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Rengar's P and R [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Rengar's E [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
