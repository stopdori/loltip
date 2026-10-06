// app/data/matchups/azir/azir_mel.ts
import type { MatchupSummary } from "../_types";

export const azir_mel: MatchupSummary = {
  champs: ["azir", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아지르 Q, R의 병사 [[DASH]]을 막을 수 있음. [[EXIST]] \n 단, Q, R의 모래 병사는 막힌 위치에서 정지. [[CLIP:https://www.youtube.com/shorts/6jqwehmxuXk]]", 
        "W의 [[REFLECT]]로 아지르 평타(일반, W), Q, E, R를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can block Azir's Q and R soldier [[DASH]]. [[EXIST]] \n However, the Q and R Sand Soldiers stop at the blocked position. [[CLIP:https://www.youtube.com/shorts/6jqwehmxuXk]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Azir's basic attacks (normal, W), Q, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Azir's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
