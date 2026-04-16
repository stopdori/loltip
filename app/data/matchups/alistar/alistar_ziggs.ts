// app/data/matchups/alistar/alistar_ziggs.ts
import type { MatchupSummary } from "../_types";

export const alistar_ziggs: MatchupSummary = {
  champs: ["alistar", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 직스 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 직스 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 직스 W의 [[AIRBORNE]], E의 [[SLOW]]를 해제할 수 있음. \n 단, E의 [[SLOW]]를 해제해도 다시 밟으면 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Ziggs's W [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Ziggs's W [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Ziggs's W [[AIRBORNE]] and E [[SLOW]]. \n However, Ziggs's E [[SLOW]] will reapply if stepped on again after being cleansed."],
    },
    ziggs: {
      ko: [],
      en: [],
    },
  },
};
