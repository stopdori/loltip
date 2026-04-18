// app/data/matchups/annie/annie_poppy.ts
import type { MatchupSummary } from "../_types";

export const annie_poppy: MatchupSummary = {
  champs: ["annie", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 P의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Poppy's R [[SKILL_CHARGED]]."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
