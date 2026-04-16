// app/data/matchups/alistar/alistar_vi.ts
import type { MatchupSummary } from "../_types";

export const alistar_vi: MatchupSummary = {
  champs: ["alistar", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 바이 Q의 [[DASH]]을 끊을 수 있음.",
        "알리스타 E의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 바이 Q의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Vi's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Vi's Q [[SKILL_CHARGED]].", "Alistar's R [[CC_CLEANSE]] can cleanse Vi's Q [[KNOCKBACK]][[STUN]] and R [[AIRBORNE]][[STUN]]."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
