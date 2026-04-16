// app/data/matchups/alistar/alistar_naafiri.ts
import type { MatchupSummary } from "../_types";

export const alistar_naafiri: MatchupSummary = {
  champs: ["alistar", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] E의 [[STUN]]로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 나피리 E, R(돌진)을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 나피리 R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Naafiri's R [[SKILL_CHANNEL]].", "Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Naafiri's E and R [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Naafiri's E or R [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Naafiri's R [[SLOW]]."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
