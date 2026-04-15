// app/data/matchups/alistar/alistar_bard.ts
import type { MatchupSummary } from "../_types";

export const alistar_bard: MatchupSummary = {
  champs: ["alistar", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 바드 E(터널)의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 바드 Q의 [[SLOW]], [[STUN]]을 해제할 수 있음. \n 단, 바드 R(존야)을 해제할 수 없음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Bard's E (Tunnel) [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Bard's E (Tunnel) [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Bard's Q [[SLOW]] and [[STUN]]. \n However, Bard's R (Stasis) cannot be cleansed."],
    },
    bard: {
      ko: [],
      en: [],
    },
  },
};
