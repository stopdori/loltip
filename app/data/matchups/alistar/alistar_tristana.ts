// app/data/matchups/alistar/alistar_tristana.ts
import type { MatchupSummary } from "../_types";

export const alistar_tristana: MatchupSummary = {
  champs: ["alistar", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 트리스타나 W(점프단계)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 트리스타나 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 트리스타나 R의 [[KNOCKBACK]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Tristana's W(점프단계)", "Alistar's E [[STUN]] cannot interrupt Tristana's W. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Tristana's R [[KNOCKBACK]]"],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
