// app/data/matchups/alistar/alistar_rengar.ts
import type { MatchupSummary } from "../_types";

export const alistar_rengar: MatchupSummary = {
  champs: ["alistar", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 렝가 P를 끊을 수 있음", "알리스타 E의 [[STUN]]로 렝가 P를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 렝가 E의 [[SLOW]], 강화 E의 [[ROOT]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Rengar's P", "Alistar's E [[STUN]] cannot interrupt Rengar's P. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Rengar's E [[SLOW]], 강화 E [[ROOT]]"],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
