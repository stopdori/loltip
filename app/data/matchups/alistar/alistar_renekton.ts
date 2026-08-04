// app/data/matchups/alistar/alistar_renekton.ts
import type { MatchupSummary } from "../_types";

export const alistar_renekton: MatchupSummary = {
  champs: ["alistar", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 레넥톤 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 레넥톤 W의 [[STUN]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Renekton's E [[DASH]].", "E [[STUN]] cannot interrupt Renekton's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Renekton's W [[STUN]]."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
