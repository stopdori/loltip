// app/data/matchups/alistar/alistar_viego.ts
import type { MatchupSummary } from "../_types";

export const alistar_viego: MatchupSummary = {
  champs: ["alistar", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 비에고 W의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[CC_CLEANSE]]로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]] [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Viego's W [[DASH]].", "E [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, the [[STUN]] still applies.", "Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Viego's W [[SKILL_CHARGED]].", "R [[CC_CLEANSE]] can cleanse Viego's W [[STUN]] and R [[KNOCKBACK]][[SLOW]]."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
