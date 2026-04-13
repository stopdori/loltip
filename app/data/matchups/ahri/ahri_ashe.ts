// app/data/matchups/ahri/ahri_ashe.ts
import type { MatchupSummary } from "../_types";

export const ahri_ashe: MatchupSummary = {
  champs: ["ahri", "ashe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies."],
    },
  },
};
