// app/data/matchups/hecarim/hecarim_malzahar.ts
import type { MatchupSummary } from "../_types";

export const hecarim_malzahar: MatchupSummary = {
  champs: ["hecarim", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]], [[SUPPRESS]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Malzahar's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Malzahar's Q [[SILENCE]] and R [[SUPPRESS]]. \n However, [[SILENCE]] and [[SUPPRESS]] remain after [[UNSTOPPABLE]] ends."],
    },
    malzahar: {
      ko: [],
      en: [],
    },
  },
};
