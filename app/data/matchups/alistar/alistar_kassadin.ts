// app/data/matchups/alistar/alistar_kassadin.ts
import type { MatchupSummary } from "../_types";

export const alistar_kassadin: MatchupSummary = {
  champs: ["alistar", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 카사딘 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.", 
        "알리스타 E의 [[STUN]]로 카사딘 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 카사딘 E의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] cannot interrupt Kassadin's R [[SKILL_CHANNEL]].", "Alistar's E [[STUN]] cannot interrupt Kassadin's R [[BLINK]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Kassadin's E [[SLOW]]."],
    },
    kassadin: {
      ko: [],
      en: [],
    },
  },
};
