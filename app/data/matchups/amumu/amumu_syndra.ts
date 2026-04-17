// app/data/matchups/amumu/amumu_syndra.ts
import type { MatchupSummary } from "../_types";

export const amumu_syndra: MatchupSummary = {
  champs: ["amumu", "syndra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 신드라 E의 [[KNOCKBACK]], QE의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Syndra's E [[KNOCKBACK]] and QE [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    syndra: {
      ko: [],
      en: [],
    },
  },
};
