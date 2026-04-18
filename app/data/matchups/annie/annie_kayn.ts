// app/data/matchups/annie/annie_kayn.ts
import type { MatchupSummary } from "../_types";

export const annie_kayn: MatchupSummary = {
  champs: ["annie", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 P의 [[STUN]]로 케인 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Kayn's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Kayn's E [[SKILL_CHANNEL]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
