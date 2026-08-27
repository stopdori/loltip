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
      ko: ["R의 [[SUPPRESS]]으로 퀸 E의 [[DASH]], R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 퀸 E의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Quinn's E [[DASH]], R [[SKILL_CHANNEL]], and R [[TRANSFORM]].", "R [[UNSTOPPABLE]] can ignore Quinn's E [[KNOCKBACK]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
