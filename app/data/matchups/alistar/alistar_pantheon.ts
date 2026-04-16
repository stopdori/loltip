// app/data/matchups/alistar/alistar_pantheon.ts
import type { MatchupSummary } from "../_types";

export const alistar_pantheon: MatchupSummary = {
  champs: ["alistar", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 판테온 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 판테온 W를 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "알리스타 R의 [[CC_CLEANSE]]로 판테온 W의 [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Pantheon's W [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Pantheon's R [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Pantheon's W [[STUN]]."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
