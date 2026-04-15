// app/data/matchups/alistar/alistar_fiora.ts
import type { MatchupSummary } from "../_types";

export const alistar_fiora: MatchupSummary = {
  champs: ["alistar", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 피오라 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 피오라 W의 [[SLOW]], [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Fiora's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Fiora's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Fiora's W [[SLOW]] and [[STUN]]."],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
