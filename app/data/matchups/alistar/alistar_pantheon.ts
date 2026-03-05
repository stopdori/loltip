// app/data/matchups/alistar/alistar_pantheon.ts
import type { MatchupSummary } from "../_types";

export const alistar_pantheon: MatchupSummary = {
  champs: ["alistar", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 판테온 W를 끊을 수 있음", "알리스타 E의 [[STUN]]로 판테온 R(시전집중)을 끊을 수 있음", "알리스타 E의 [[STUN]]로 판테온 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 판테온 W의 [[STUN]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Pantheon's W", "Alistar's E [[STUN]] can interrupt Pantheon's R (channeling)", "Alistar's E [[STUN]] cannot interrupt Pantheon's W. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Pantheon's W [[STUN]]"],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
