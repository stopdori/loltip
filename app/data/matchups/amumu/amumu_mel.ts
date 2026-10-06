// app/data/matchups/amumu/amumu_mel.ts
import type { MatchupSummary } from "../_types";

export const amumu_mel: MatchupSummary = {
  champs: ["amumu", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 멜 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Mel's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아무무 Q의 [[PROJECTILE]]를 반사할 수 있음. [[EXIST]] \n 단, [[REFLECT]]한 Q가 적중하면 대상에게 데미지와 [[STUN]]이 유효하고, 멜이 대상에게 [[DASH]].", 
        "W의 [[REFLECT]]로 아무무 평타, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 아무무 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can reflect Amumu's Q [[PROJECTILE]]. [[EXIST]] \n However, if the [[REFLECT]]ed Q hits, the damage and [[STUN]] apply to the target, and Mel [[DASH]]es to the target.", 
        "W [[REFLECT]] cannot [[REFLECT]] Amumu's basic attacks, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Amumu's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
