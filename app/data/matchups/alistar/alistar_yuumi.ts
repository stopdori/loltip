// app/data/matchups/alistar/alistar_yuumi.ts
import type { MatchupSummary } from "../_types";

export const alistar_yuumi: MatchupSummary = {
  champs: ["alistar", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 유미 W를 쿨타임으로 만들 수 있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 유미 Q의 [[SLOW]]를 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 유미 R의 [[SLOW]]를 해제해도 다시 맞으면 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can put Yuumi's W on cooldown.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Yuumi's W [[DASH]].", "Alistar's R [[CC_CLEANSE]] can cleanse Yuumi's Q [[SLOW]].", "Yuumi's R [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]] if hit again."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
