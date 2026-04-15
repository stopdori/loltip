// app/data/matchups/alistar/alistar_graves.ts
import type { MatchupSummary } from "../_types";

export const alistar_graves: MatchupSummary = {
  champs: ["alistar", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 그레이브즈(그브) E, R의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 그브 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 그브 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Graves's E and R [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Graves's E and R [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Graves's W [[SLOW]]."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
