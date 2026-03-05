// app/data/matchups/alistar/alistar_ksante.ts
import type { MatchupSummary } from "../_types";

export const alistar_ksante: MatchupSummary = {
  champs: ["alistar", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 크산테 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 크산테 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 크산테 Q의 [[SLOW]][[STUN]], W의 [[STUN]], R의 [[SUPPRESS]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt K'Sante's E", "Alistar's E [[STUN]] cannot interrupt K'Sante's E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse K'Sante's Q [[SLOW]][[STUN]], W [[STUN]], R [[SUPPRESS]]"],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
