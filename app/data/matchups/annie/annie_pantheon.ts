// app/data/matchups/annie/annie_pantheon.ts
import type { MatchupSummary } from "../_types";

export const annie_pantheon: MatchupSummary = {
  champs: ["annie", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "애니 P의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Pantheon's R [[SKILL_CHANNEL]]."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
