// app/data/matchups/alistar/alistar_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const alistar_caitlyn: MatchupSummary = {
  champs: ["alistar", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 케틀 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 케이틀린 W의 [[ROOT]], E의 [[SLOW]]를 해제할 수 있음. \n 단, 케틀 W의 헤드샷은 해제되지 않음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Caitlyn's E [[DASH]].", "E [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Caitlyn's W [[ROOT]] and E [[SLOW]]. \n However, Caitlyn's W headshot cannot be cleansed."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
