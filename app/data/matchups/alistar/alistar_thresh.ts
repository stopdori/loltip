// app/data/matchups/alistar/alistar_thresh.ts
import type { MatchupSummary } from "../_types";

export const alistar_thresh: MatchupSummary = {
  champs: ["alistar", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 쓰레쉬 Q, W(랜턴)의 [[DASH]]을 끊을 수 있음. \n 단, 랜턴을 알리 W만으로 끊기는 상당히 어려움.", 
        "E의 [[STUN]]로 쓰레쉬 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 쓰레쉬 Q의 [[STUN]] [[GRAB]], E의 [[AIRBORNE]] [[SLOW]], R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Thresh's Q and W (Lantern) [[DASH]]. \n However, interrupting the Lantern with W alone is quite difficult.", "E [[STUN]] cannot interrupt Thresh's Q or W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Thresh's Q [[STUN]][[GRAB]], E [[AIRBORNE]][[SLOW]], and R [[SLOW]]."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
