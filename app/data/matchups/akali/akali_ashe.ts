// app/data/matchups/akali/akali_ashe.ts
import type { MatchupSummary } from "../_types";

export const akali_ashe: MatchupSummary = {
  champs: ["akali", "ashe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [],
      en: [],
    },
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
