// app/data/matchups/amumu/amumu_taric.ts
import type { MatchupSummary } from "../_types";

export const amumu_taric: MatchupSummary = {
  champs: ["amumu", "taric"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 타릭 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Taric's E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    taric: {
      ko: [],
      en: [],
    },
  },
};
