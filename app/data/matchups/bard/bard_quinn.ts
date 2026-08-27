// app/data/matchups/bard/bard_quinn.ts
import type { MatchupSummary } from "../_types";

export const bard_quinn: MatchupSummary = {
  champs: ["bard", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "바드 R(존야)의 [[STASIS]]으로 퀸 E의 [[DASH]], R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Q [[STUN]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]].",
        "R (like Zhonya's Hourglass) [[STASIS]] can interrupt Quinn's E [[DASH]], R [[SKILL_CHANNEL]], and R [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
