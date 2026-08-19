// app/data/matchups/annie/annie_vi.ts
import type { MatchupSummary } from "../_types";

export const annie_vi: MatchupSummary = {
  champs: ["annie", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Vi's Q [[SKILL_CHARGED]]."],
    },
    vi: {
      ko: ["Q, R의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Vi's Q and R [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
