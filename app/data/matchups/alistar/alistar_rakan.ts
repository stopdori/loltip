// app/data/matchups/alistar/alistar_rakan.ts
import type { MatchupSummary } from "../_types";

export const alistar_rakan: MatchupSummary = {
  champs: ["alistar", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Rakan's W and E [[DASH]].", "E [[STUN]] cannot interrupt Rakan's W or E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Rakan's W [[AIRBORNE]] and R [[CHARM]]."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
