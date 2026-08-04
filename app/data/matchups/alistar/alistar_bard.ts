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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 바드 E(터널)의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 바드 Q의 [[SLOW]], [[STUN]]을 해제할 수 있음. \n 단, 바드 R(존야)을 해제할 수 없음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Bard's E (Tunnel) [[DASH]].", "E [[STUN]] cannot interrupt Bard's E (Tunnel) [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Bard's Q [[SLOW]] and [[STUN]]. \n However, Bard's R (Stasis) cannot be cleansed."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 알리스타 Q스킬 발동을 끊을 수 있음.",
        "바드 R(존야)로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
  },
};
