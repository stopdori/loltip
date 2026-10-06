// app/data/matchups/ambessa/ambessa_mel.ts
import type { MatchupSummary } from "../_types";

export const ambessa_mel: MatchupSummary = {
  champs: ["ambessa", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 멜 E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Mel's E [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 암베사 평타, Q1, Q2, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 암베사 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Ambessa's basic attacks, Q1, Q2, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Ambessa's P [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
