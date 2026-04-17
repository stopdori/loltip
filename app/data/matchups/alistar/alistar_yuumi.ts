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
      ko: [ 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 유미 Q의 [[SLOW]]를 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 유미 R의 [[SLOW]]를 해제해도 다시 맞으면 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Yuumi's W [[DASH]].", "Alistar's R [[CC_CLEANSE]] can cleanse Yuumi's Q [[SLOW]].", "Yuumi's R [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]] if hit again."],
    },
    yuumi: {
      ko: ["유미 W는 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 맞으면 W가 쿨타임이 될 수 있음."],
      en: ["Yuumi's W can be put on [[COOLDOWN]] if hit by Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], or E [[STUN]]."],
    },
  },
};
