// app/data/matchups/hecarim/hecarim_leblanc.ts
import type { MatchupSummary } from "../_types";

export const hecarim_leblanc: MatchupSummary = {
  champs: ["hecarim", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 르블랑 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt LeBlanc's W [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore LeBlanc's E [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
