// app/data/matchups/alistar/alistar_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const alistar_xinzhao: MatchupSummary = {
  champs: ["alistar", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 신짜오 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 신짜오 Q의 [[AIRBORNE]], W의 [[SLOW]], E의 [[SLOW]], R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Xin Zhao's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Xin Zhao's Q [[AIRBORNE]], W [[SLOW]], E [[SLOW]], and R [[KNOCKBACK]]."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
