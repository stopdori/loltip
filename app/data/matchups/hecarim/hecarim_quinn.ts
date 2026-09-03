// app/data/matchups/hecarim/hecarim_quinn.ts
import type { MatchupSummary } from "../_types";

export const hecarim_quinn: MatchupSummary = {
  champs: ["hecarim", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 퀸 E의 [[DASH]], R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음.",
        "R의 [[UNSTOPPABLE]]로 퀸 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Quinn's E [[DASH]] and R [[SKILL_CHANNEL]] and [[TRANSFORM]].",
        "R [[UNSTOPPABLE]] can ignore Quinn's E [[KNOCKBACK]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
