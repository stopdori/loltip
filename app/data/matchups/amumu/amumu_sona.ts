// app/data/matchups/amumu/amumu_sona.ts
import type { MatchupSummary } from "../_types";

export const amumu_sona: MatchupSummary = {
  champs: ["amumu", "sona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 소나 R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Sona's R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    sona: {
      ko: [],
      en: [],
    },
  },
};
