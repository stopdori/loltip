// app/data/matchups/hecarim/hecarim_velkoz.ts
import type { MatchupSummary } from "../_types";

export const hecarim_velkoz: MatchupSummary = {
  champs: ["hecarim", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 벨코즈 E의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Vel'Koz's E [[AIRBORNE]]."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
