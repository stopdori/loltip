// app/data/matchups/anivia/anivia_rakan.ts
import type { MatchupSummary } from "../_types";

export const anivia_rakan: MatchupSummary = {
  champs: ["anivia", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Rakan's W or E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Rakan's W or E [[DASH]]."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
