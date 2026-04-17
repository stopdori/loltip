// app/data/matchups/anivia/anivia_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const anivia_xinzhao: MatchupSummary = {
  champs: ["anivia", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 신짜오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Xin Zhao's E [[DASH]]."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
