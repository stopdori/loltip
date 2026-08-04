// app/data/matchups/alistar/alistar_yone.ts
import type { MatchupSummary } from "../_types";

export const alistar_yone: MatchupSummary = {
  champs: ["alistar", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 요네 Q3의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 요네 Q3의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 요네 Q3, R의 [[AIRBORNE]]를 해제할 수 있음.", 
        "W의 [[KNOCKBACK]]으로 요네 R을 끊을 수는 없지만 궤적을 비틀 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Yone's Q3 [[DASH]].", "E [[STUN]] cannot interrupt Yone's Q3 [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Yone's Q3 and R [[AIRBORNE]].", "W [[KNOCKBACK]] cannot interrupt Yone's R, but can distort its trajectory."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
