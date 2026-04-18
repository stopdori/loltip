// app/data/matchups/annie/annie_lillia.ts
import type { MatchupSummary } from "../_types";

export const annie_lillia: MatchupSummary = {
  champs: ["annie", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 릴리아 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["Annie's P [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's R(Tibbers) [[SUMMON]] can block Lillia's E [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
