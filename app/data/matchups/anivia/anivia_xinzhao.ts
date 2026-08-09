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
      ko: ["Q의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 신짜오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Xin Zhao's E [[DASH]]."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
