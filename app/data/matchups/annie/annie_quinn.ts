// app/data/matchups/annie/annie_quinn.ts
import type { MatchupSummary } from "../_types";

export const annie_quinn: MatchupSummary = {
  champs: ["annie", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 퀸 R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["P [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Quinn's R [[TRANSFORM]]."],
    },
    quinn: {
      ko: ["E의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Quinn's E [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
