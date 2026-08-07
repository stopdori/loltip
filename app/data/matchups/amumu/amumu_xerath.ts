// app/data/matchups/amumu/amumu_xerath.ts
import type { MatchupSummary } from "../_types";

export const amumu_xerath: MatchupSummary = {
  champs: ["amumu", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "Q의 [[CC_BUFFER]]로 제라스 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q and R [[STUN]] can interrupt Xerath's Q [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Xerath's E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
