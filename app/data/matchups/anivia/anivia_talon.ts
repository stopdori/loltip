// app/data/matchups/anivia/anivia_talon.ts
import type { MatchupSummary } from "../_types";

export const anivia_talon: MatchupSummary = {
  champs: ["anivia", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 탈론 Q, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Talon's Q or E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Talon's Q or E [[DASH]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
