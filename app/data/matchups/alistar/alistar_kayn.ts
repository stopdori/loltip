// app/data/matchups/alistar/alistar_kayn.ts
import type { MatchupSummary } from "../_types";

export const alistar_kayn: MatchupSummary = {
  champs: ["alistar", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 케인 Q를 끊을 수 있음", "알리스타 E의 [[STUN]]로 케인 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 Q, W, E로 케인 E(벽통과)를 끊을 수 있음", "알리스타 R의 [[CC_CLEANSE]]로 케인 W(기본/그암)의 [[SLOW]], 케인 W(다르킨)의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt 케인 Q", "Alistar's E [[STUN]] cannot interrupt 케인 Q. However, the [[STUN]] still applies.", "Alistar's Q, W, and E can interrupt 케인 E(벽통과)", "Alistar's R [[CC_CLEANSE]] can cleanse Kayn's W(기본/그암) [[SLOW]], 케인 W(다르킨) [[AIRBORNE]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
