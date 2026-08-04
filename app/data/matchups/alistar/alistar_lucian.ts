// app/data/matchups/alistar/alistar_lucian.ts
import type { MatchupSummary } from "../_types";

export const alistar_lucian: MatchupSummary = {
  champs: ["alistar", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 루시안 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Lucian's E [[DASH]].", "E [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies.", "Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Lucian's R [[SKILL_CHANNEL]]."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
