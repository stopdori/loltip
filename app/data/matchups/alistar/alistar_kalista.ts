// app/data/matchups/alistar/alistar_kalista.ts
import type { MatchupSummary } from "../_types";

export const alistar_kalista: MatchupSummary = {
  champs: ["alistar", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 칼리스타 P의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 칼리스타 E의 [[SLOW]], R2의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Kalista's P [[DASH]].", "E [[STUN]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Kalista's E [[SLOW]] and R2 [[AIRBORNE]]."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
