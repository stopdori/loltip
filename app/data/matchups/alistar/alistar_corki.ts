// app/data/matchups/alistar/alistar_corki.ts
import type { MatchupSummary } from "../_types";

export const alistar_corki: MatchupSummary = {
  champs: ["alistar", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 코르키 W의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 코르키 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Corki's W [[DASH]].", "E [[STUN]] cannot interrupt Corki's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
