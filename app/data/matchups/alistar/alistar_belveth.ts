// app/data/matchups/alistar/alistar_belveth.ts
import type { MatchupSummary } from "../_types";

export const alistar_belveth: MatchupSummary = {
  champs: ["alistar", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 벨베스 Q의 [[DASH]]을 끊을 수 있음.",
        "알리스타 E의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 벨베스 W의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Bel'Veth's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Bel'Veth's W [[AIRBORNE]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R의 [[CAST_COMMIT]]으로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
