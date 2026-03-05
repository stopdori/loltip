// app/data/matchups/alistar/alistar_nautilus.ts
import type { MatchupSummary } from "../_types";

export const alistar_nautilus: MatchupSummary = {
  champs: ["alistar", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 노틸러스 Q(그렙단계)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 노틸러스 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 노틸러스 P의 [[ROOT]], Q의 [[AIRBORNE]] [[STUN]], E의 [[SLOW]], R의 [[AIRBORNE]] [[STUN]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Nautilus's Q (grab phase)", "Alistar's E [[STUN]] cannot interrupt Nautilus's Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Nautilus's P [[ROOT]], Q [[AIRBORNE]] [[STUN]], E [[SLOW]], R [[AIRBORNE]] [[STUN]]"],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
