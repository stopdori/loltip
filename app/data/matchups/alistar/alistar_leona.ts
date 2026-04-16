// app/data/matchups/alistar/alistar_leona.ts
import type { MatchupSummary } from "../_types";

export const alistar_leona: MatchupSummary = {
  champs: ["alistar", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 레오나 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 레오나 Q의 [[STUN]], E의 [[ROOT]], R의 [[SLOW]][[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Leona's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Leona's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Leona's Q [[STUN]], E [[ROOT]], and R [[SLOW]][[STUN]]."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
