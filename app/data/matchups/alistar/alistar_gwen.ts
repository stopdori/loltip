// app/data/matchups/alistar/alistar_gwen.ts
import type { MatchupSummary } from "../_types";

export const alistar_gwen: MatchupSummary = {
  champs: ["alistar", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 그웬 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 그웬 E를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 그웬 R의 [[SLOW]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Gwen's E", "Alistar's E [[STUN]] cannot interrupt Gwen's E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Gwen's R [[SLOW]]"],
    },
    gwen: {
      ko: [],
      en: [],
    },
  },
};
