// app/data/matchups/alistar/alistar_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const alistar_tahmkench: MatchupSummary = {
  champs: ["alistar", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 탐켄치 Q의 [[SLOW]], [[STUN]] / W의 [[AIRBORNE]]을 해제할 수 있음.", 
        "알리스타 R은 탐켄치 R(뱃속)에서 사용 불가."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Tahm Kench's Q [[SLOW]][[STUN]] and W [[AIRBORNE]].", "Alistar cannot use R while inside Tahm Kench's R."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
