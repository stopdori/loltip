// app/data/matchups/alistar/alistar_rengar.ts
import type { MatchupSummary } from "../_types";

export const alistar_rengar: MatchupSummary = {
  champs: ["alistar", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 렝가 P, R의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 렝가 E의 [[SLOW]], 강화 E의 [[ROOT]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Rengar's P and R [[DASH]].", "E [[STUN]] cannot interrupt Rengar's P or R [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Rengar's E [[SLOW]] and Empowered E [[ROOT]]."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
