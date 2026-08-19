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
      ko: ["P의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 자크 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 효과는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Zac's E [[SKILL_CHARGED]].", "R [[SUMMON]]ed Tibbers can block Zac's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional effects cannot be blocked."],
    },
    zac: {
      ko: ["Q, E의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]], [[KNOCKBACK]] 할 수 있음."],
      en: ["Zac's Q and E [[AIRBORNE]] and R [[KNOCKBACK]] can send Annie's R [[SUMMON]]ed Tibbers airborne or knock it back."],
    },
  },
};
