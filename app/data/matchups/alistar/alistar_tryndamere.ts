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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 트린다미어 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Tryndamere's E [[DASH]].", "E [[STUN]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Tryndamere's W [[SLOW]]."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
