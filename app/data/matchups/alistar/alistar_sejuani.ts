// app/data/matchups/alistar/alistar_sejuani.ts
import type { MatchupSummary } from "../_types";

export const alistar_sejuani: MatchupSummary = {
  champs: ["alistar", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 세주아니 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 세주아니 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 세주아니 Q의 [[AIRBORNE]], W의 [[SLOW]], E의 [[STUN]], R의 [[SLOW]] [[STUN]] 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Sejuani's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Sejuani's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Sejuani's Q [[AIRBORNE]], W [[SLOW]], E [[STUN]], and R [[SLOW]][[STUN]]."],
    },
    sejuani: {
      ko: [],
      en: [],
    },
  },
};
