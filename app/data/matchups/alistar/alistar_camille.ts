// app/data/matchups/alistar/alistar_camille.ts
import type { MatchupSummary } from "../_types";

export const alistar_camille: MatchupSummary = {
  champs: ["alistar", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 카밀 E(그렙/대기단계)의 [[SKILL_CHANNEL]] 끊을 수 있음.",
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 카밀 E의 [[DASH]]을 끊을 수 있음.",
        "알리스타 E의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 카밀 W의 [[SLOW]], E의 [[STUN]], R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Camille's E (Grapple/Waiting phase) [[SKILL_CHANNEL]].", "Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Camille's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Camille's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Camille's W [[SLOW]], E [[STUN]], and R [[KNOCKBACK]]."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
