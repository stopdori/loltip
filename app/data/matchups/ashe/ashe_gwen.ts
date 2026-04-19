// app/data/matchups/ashe/ashe_gwen.ts
import type { MatchupSummary } from "../_types";

export const ashe_gwen: MatchupSummary = {
  champs: ["ashe", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    gwen: {
      ko: ["그웬 W로 애쉬 평타, Q(평타), W, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W prevents Ashe's basic attacks, Q (basic attacks), W and R from hitting when outside the zone"],
    },
  },
};
