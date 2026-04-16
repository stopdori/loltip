// app/data/matchups/alistar/alistar_leblanc.ts
import type { MatchupSummary } from "../_types";

export const alistar_leblanc: MatchupSummary = {
  champs: ["alistar", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 르블랑 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 르블랑 E의 [[ROOT]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt LeBlanc's W [[DASH]].", "Alistar's E [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse LeBlanc's E [[ROOT]]."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
