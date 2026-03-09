// app/data/matchups/alistar/alistar_diana.ts
import type { MatchupSummary } from "../_types";

export const alistar_diana: MatchupSummary = {
  champs: ["alistar", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 다이애나 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 다이애나 E를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 다이애나 R의 [[SLOW]], [[AIRBORNE]]를 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Diana's E", "Alistar's E [[STUN]] cannot interrupt Diana's E. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Diana's R [[SLOW]] and [[AIRBORNE]]"],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
