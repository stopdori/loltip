// app/data/matchups/alistar/alistar_yunara.ts
import type { MatchupSummary } from "../_types";

export const alistar_yunara: MatchupSummary = {
  champs: ["alistar", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 유나라 E(초월)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 유나라 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 유나라 W의 [[SLOW]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt 유나라 E(초월)", "Alistar's E [[STUN]] cannot interrupt 유나라 E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse 유나라 W [[SLOW]]"],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
