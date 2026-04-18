// app/data/matchups/annie/annie_rakan.ts
import type { MatchupSummary } from "../_types";

export const annie_rakan: MatchupSummary = {
  champs: ["annie", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 라칸 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's R(Tibbers) [[SUMMON]] can block Rakan's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
