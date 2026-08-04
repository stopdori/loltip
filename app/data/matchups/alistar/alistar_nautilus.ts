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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 노틸러스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 노틸러스 P의 [[ROOT]], Q의 [[AIRBORNE]] [[STUN]], E의 [[SLOW]], R의 [[AIRBORNE]] [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Nautilus's Q [[DASH]].", "E [[STUN]] cannot interrupt Nautilus's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Nautilus's P [[ROOT]], Q [[AIRBORNE]][[STUN]], E [[SLOW]], and R [[AIRBORNE]][[STUN]]."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
