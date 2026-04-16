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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 유나라 RE의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 유나라 W, RW의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Yunara's RE [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Yunara's W and RW [[SLOW]]."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
