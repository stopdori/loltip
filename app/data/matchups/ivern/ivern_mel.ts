// app/data/matchups/ivern/ivern_mel.ts
import type { MatchupSummary } from "../_types";

export const ivern_mel: MatchupSummary = {
  champs: ["ivern", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ivern: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아이번 평타, Q, R([[SUMMON]]된 데이지의 3번째 [[BA]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q2의 [[DASH]]도 발동 가능.", 
        "W의 [[REFLECT]]로 아이번 E([[DETONATE]]), R([[SUMMON]]된 데이지의 [[BA]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 아이번 Q2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Ivern's basic attacks, Q, and R (the 3rd [[BA]] of [[SUMMON]]ed Daisy) [[PROJECTILE]]. [[EXIST]] \n However, the Q2 [[DASH]] can also be activated.", 
        "W [[REFLECT]] cannot [[REFLECT]] Ivern's E ([[DETONATE]]) or R ([[BA]] of [[SUMMON]]ed Daisy). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Ivern's Q2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
