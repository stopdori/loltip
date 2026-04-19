// app/data/matchups/ashe/ashe_quinn.ts
import type { MatchupSummary } from "../_types";

export const ashe_quinn: MatchupSummary = {
  champs: ["ashe", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애쉬 R의 [[STUN]]로 퀸 R의 [[SKILL_CHANNEL]], [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Ashe's R [[STUN]] can cancel Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
