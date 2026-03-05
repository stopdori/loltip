// app/data/matchups/alistar/alistar_lucian.ts
import type { MatchupSummary } from "../_types";

export const alistar_lucian: MatchupSummary = {
  champs: ["alistar", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 루시안 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 루시안 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 Q ,W ,E로 루시안 R(채널링)을 끊을 수 있음"],
      en: ["Alistar's Q and W can interrupt Lucian's E", "Alistar's E [[STUN]] cannot interrupt Lucian's E. However, the [[STUN]] still applies.", "Alistar's Q ,W and E can interrupt Lucian's R(channeling)"],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
