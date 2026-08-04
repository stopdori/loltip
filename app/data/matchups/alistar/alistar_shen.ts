// app/data/matchups/alistar/alistar_shen.ts
import type { MatchupSummary } from "../_types";

export const alistar_shen: MatchupSummary = {
  champs: ["alistar", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 쉔 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[CC_CLEANSE]]로 쉔 E의 [[TAUNT]]을 해제할 수 있음.",],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Shen's E [[DASH]].", "E [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] still applies.", "Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Shen's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Shen's E [[TAUNT]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
