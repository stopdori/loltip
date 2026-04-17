// app/data/matchups/anivia/anivia_gnar.ts
import type { MatchupSummary } from "../_types";

export const anivia_gnar: MatchupSummary = {
  champs: ["anivia", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 나르 미니폼 E / 메가폼 E의 [[DASH]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 나르 미니폼 E / 메가폼 E의 [[DASH]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Gnar's Mini E or Mega E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Gnar's Mini E or Mega E [[DASH]]."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
