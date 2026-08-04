// app/data/matchups/alistar/alistar_zaahen.ts
import type { MatchupSummary } from "../_types";

export const alistar_zaahen: MatchupSummary = {
  champs: ["alistar", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 자헨 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 자헨 Q의 [[AIRBORNE]], W의 [[GRAB]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Zaaheen's E [[DASH]].", "E [[STUN]] cannot interrupt Zaaheen's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Zaaheen's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
    zaahen: {
      ko: [],
      en: [],
    },
  },
};
