// app/data/matchups/alistar/alistar_briar.ts
import type { MatchupSummary } from "../_types";

export const alistar_briar: MatchupSummary = {
  champs: ["alistar", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 브라이어 Q, W를 끊을 수 있음", "알리스타 E의 [[STUN]] 브라이어 Q, W를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 브라이어 Q의 [[STUN]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Briar's Q and W", "Alistar's E [[STUN]] cannot interrupt Briar's Q and W. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Briar's Q [[STUN]]"],
    },
    briar: {
      ko: [],
      en: [],
    },
  },
};
