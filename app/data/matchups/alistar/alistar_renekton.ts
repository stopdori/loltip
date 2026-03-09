// app/data/matchups/alistar/alistar_renekton.ts
import type { MatchupSummary } from "../_types";

export const alistar_renekton: MatchupSummary = {
  champs: ["alistar", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 레넥톤 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 레넥톤 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 레넥톤 W의 [[STUN]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Renekton's E", "Alistar's E [[STUN]] cannot interrupt Renekton's E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Renekton's W [[STUN]]"],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
