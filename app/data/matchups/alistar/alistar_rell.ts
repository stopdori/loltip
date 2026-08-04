// app/data/matchups/alistar/alistar_rell.ts
import type { MatchupSummary } from "../_types";

export const alistar_rell: MatchupSummary = {
  champs: ["alistar", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 렐 W(붕괴)의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 렐 W(붕괴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 렐 Q의 [[STUN]], 탑승폼 W의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Rell's W (Dismount) [[DASH]].", "E [[STUN]] cannot interrupt Rell's W (Dismount) [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Rell's Q [[STUN]] and W (Mounted) [[AIRBORNE]]."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
