// app/data/matchups/alistar/alistar_gragas.ts
import type { MatchupSummary } from "../_types";

export const alistar_gragas: MatchupSummary = {
  champs: ["alistar", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 그라가스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 그라가스 Q의 [[SLOW]], E의 [[STUN]] / E, R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Gragas's E [[DASH]].", "E [[STUN]] cannot interrupt Gragas's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Gragas's Q [[SLOW]], E [[STUN]] / E and R [[KNOCKBACK]]."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
