// app/data/matchups/mel/mel_thresh.ts
import type { MatchupSummary } from "../_types";

export const mel_thresh: MatchupSummary = {
  champs: ["mel", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 쓰레쉬 Q, W(랜턴)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 Q가 적중했을 때, 멜이 Q2를 사용할 수 없음. \n 단, [[REFLECT]]된 W를 멜의 아군이 사용할 수 없음.", 
      "W의 [[REFLECT]]로 쓰레쉬 평타, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
    "E의 [[ROOT]]으로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Thresh's Q and W (lantern) [[PROJECTILE]]. [[EXIST]] \n However, when a [[REFLECT]]ed Q hits, Mel cannot use Q2. \n However, Mel's allies cannot use a [[REFLECT]]ed W.", 
        "W [[REFLECT]] cannot [[REFLECT]] Thresh's basic attacks, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Thresh's Q2 and W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
