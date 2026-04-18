// app/data/matchups/annie/annie_zac.ts
import type { MatchupSummary } from "../_types";

export const annie_zac: MatchupSummary = {
  champs: ["annie", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 P의 [[STUN]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 자크 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 효과는 막을 수 없음."],
      en: ["Annie's P [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Zac's E [[SKILL_CHARGED]].", "Annie's R(Tibbers) [[SUMMON]] can block Zac's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional effects cannot be blocked."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
