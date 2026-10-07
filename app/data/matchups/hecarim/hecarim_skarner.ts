// app/data/matchups/hecarim/hecarim_skarner.ts
import type { MatchupSummary } from "../_types";

export const hecarim_skarner: MatchupSummary = {
  champs: ["hecarim", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[UNSTOPPABLE]]로 스카너 E, R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]"],
      en: ["E [[KNOCKBACK]] and R [[FEAR]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[UNSTOPPABLE]] can ignore Skarner's E and R [[SUPPRESS]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
