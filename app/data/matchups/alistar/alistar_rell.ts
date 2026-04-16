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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 렐 W(붕괴)의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 렐 W(붕괴)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 렐 Q의 [[STUN]], 탑승폼 W의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Rell's W (Dismount) [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Rell's W (Dismount) [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Rell's Q [[STUN]] and W (Mounted) [[AIRBORNE]]."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
