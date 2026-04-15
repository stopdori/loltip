// app/data/matchups/alistar/alistar_ekko.ts
import type { MatchupSummary } from "../_types";

export const alistar_ekko: MatchupSummary = {
  champs: ["alistar", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 에코 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
      "알리스타 R의 [[CC_CLEANSE]]로 에코 W의 [[STUN]]을 해제할 수 있음. \n  단, 에코 W의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Ekko's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Ekko's E [[DASH]] or [[BLINK]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Ekko's W [[STUN]]. \n However, Ekko's W persistent [[SLOW]] will reapply after being cleansed."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
