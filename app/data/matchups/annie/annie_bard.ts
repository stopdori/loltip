// app/data/matchups/annie/annie_bard.ts
import type { MatchupSummary } from "../_types";

export const annie_bard: MatchupSummary = {
  champs: ["annie", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 R(티버)의 [[SUMMON]]으로 바드 Q의 [[PIERCE_ONCE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Bard's E(Magical Journey) [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's R(Tibbers) [[SUMMON]] can block Bard's Q [[PIERCE_ONCE]] [[PROJECTILE]]."],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
