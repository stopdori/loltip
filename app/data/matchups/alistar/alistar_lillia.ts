// app/data/matchups/alistar/alistar_lillia.ts
import type { MatchupSummary } from "../_types";

export const alistar_lillia: MatchupSummary = {
  champs: ["alistar", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 릴리아 W를 끊을 수 있음", "알리스타 E의 [[STUN]]로 릴리아 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 릴리아 E의 [[SLOW]], R의 [[SLEEP]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Lillia's W", "Alistar's E [[STUN]] cannot interrupt Lillia's W. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Lillia's E [[SLOW]], R [[SLEEP]]"],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
