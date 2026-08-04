// app/data/matchups/alistar/alistar_azir.ts
import type { MatchupSummary } from "../_types";

export const alistar_azir: MatchupSummary = {
  champs: ["alistar", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.", "E의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 아지르 Q의 [[SLOW]], R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Azir's E [[DASH]].", "E [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Azir's Q [[SLOW]] and R [[KNOCKBACK]]."],
    },
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 알리스타 W의 [[DASH]]를 막을 수 있음"],
      en: [],
    },
  },
};
