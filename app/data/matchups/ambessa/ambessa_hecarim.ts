// app/data/matchups/ambessa/ambessa_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ambessa_hecarim: MatchupSummary = {
  champs: ["ambessa", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Hecarim's E [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]]. \n However, the [[FEAR]] still applies after [[UNSTOPPABLE]] ends."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
