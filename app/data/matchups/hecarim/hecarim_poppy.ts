// app/data/matchups/hecarim/hecarim_poppy.ts
import type { MatchupSummary } from "../_types";

export const hecarim_poppy: MatchupSummary = {
  champs: ["hecarim", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 뽀삐 W의 [[ANTI_DASH]] / E의 [[KNOCKBACK]] / R의 [[AIRBORNE]], [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Poppy's E [[DASH]] and R [[SKILL_CHARGED]].",
        "R [[UNSTOPPABLE]] can ignore Poppy's W [[ANTI_DASH]] / E [[KNOCKBACK]] / R [[AIRBORNE]] and [[KNOCKBACK]]."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
