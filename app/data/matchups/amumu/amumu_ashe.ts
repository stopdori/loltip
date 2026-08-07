// app/data/matchups/amumu/amumu_ashe.ts
import type { MatchupSummary } from "../_types";

export const amumu_ashe: MatchupSummary = {
  champs: ["amumu", "ashe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 애쉬 R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Ashe's R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
