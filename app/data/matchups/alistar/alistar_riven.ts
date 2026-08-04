// app/data/matchups/alistar/alistar_riven.ts
import type { MatchupSummary } from "../_types";

export const alistar_riven: MatchupSummary = {
  champs: ["alistar", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 리븐 Q3의 [[AIRBORNE]], W의 [[STUN]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Riven's Q and E [[DASH]].", "E [[STUN]] cannot interrupt Riven's Q or E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Riven's Q3 [[AIRBORNE]] and W [[STUN]]."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
