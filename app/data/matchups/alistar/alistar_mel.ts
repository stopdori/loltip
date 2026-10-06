// app/data/matchups/alistar/alistar_mel.ts
import type { MatchupSummary } from "../_types";

export const alistar_mel: MatchupSummary = {
  champs: ["alistar", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 멜 E의 [[SLOW]], [[ROOT]]을 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Mel's E [[SLOW]], [[ROOT]]."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 알리스타 평타(일반, E), Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Alistar's basic attacks (normal, E), Q, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Alistar's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
