// app/data/matchups/alistar/alistar_zeri.ts
import type { MatchupSummary } from "../_types";

export const alistar_zeri: MatchupSummary = {
  champs: ["alistar", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 제리 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 제리 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 제리 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Zeri's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Zeri's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Zeri's W [[SLOW]]."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
