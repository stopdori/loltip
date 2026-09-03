// app/data/matchups/evelynn/evelynn_hecarim.ts
import type { MatchupSummary } from "../_types";

export const evelynn_hecarim: MatchupSummary = {
  champs: ["evelynn", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 이블린 W의 [[CHARM]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Evelynn's W [[CHARM]]. \n However, [[CHARM]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
