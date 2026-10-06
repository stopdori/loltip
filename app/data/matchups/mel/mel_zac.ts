// app/data/matchups/mel/mel_zac.ts
import type { MatchupSummary } from "../_types";

export const mel_zac: MatchupSummary = {
  champs: ["mel", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 자크 Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 Q의 [[TETHER]] 효과는 적용되지 않음.", 
        "W의 [[REFLECT]]로 자크 평타, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 자크 E의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
      "E의 [[ROOT]]으로 자크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Zac's Q [[PROJECTILE]]. [[EXIST]] \n However, the [[TETHER]] effect of a [[REFLECT]]ed Q does not apply.", 
        "W [[REFLECT]] cannot [[REFLECT]] Zac's basic attacks, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Zac's E [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Zac's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
