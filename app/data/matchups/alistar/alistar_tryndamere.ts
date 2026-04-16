// app/data/matchups/alistar/alistar_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const alistar_tryndamere: MatchupSummary = {
  champs: ["alistar", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 트린다미어 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Tryndamere's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Tryndamere's W [[SLOW]]."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
