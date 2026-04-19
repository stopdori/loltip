// app/data/matchups/amumu/amumu_quinn.ts
import type { MatchupSummary } from "../_types";

export const amumu_quinn: MatchupSummary = {
  champs: ["amumu", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아무무 R의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 퀸 R의 [[SKILL_CHANNEL]], [[TRANSFORM]]을 해제시킬 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 퀸 E의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Amumu's R [[STUN]] can interrupt Quinn's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]].", "Amumu's Q [[CC_BUFFER]] can ignore Quinn's E [[KNOCKBACK]] and continue [[DASH]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
