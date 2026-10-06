// app/data/matchups/diana/diana_mel.ts
import type { MatchupSummary } from "../_types";

export const diana_mel: MatchupSummary = {
  champs: ["diana", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 다이애나 Q, W(구체)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 다이애나 W는 [[REFLECT]]되면 멜 주변에 회전. \n 단, 다이애나 W의 추가 [[SHIELD]] 효과는 [[PROJECTILE]]가 한 개라도 [[REFLECT]]되면 발동하지 않음. \n 단, 다이애나 W는 [[REFLECT]]되어 멜이 3개의 구체 소유하고 적중시켜도 추가 [[SHIELD]] 효과는 발동하지 않음.", 
        "W의 [[REFLECT]]로 다이애나 평타(일반, [[EMPOWERED]]), E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Diana's Q and W (orbs) [[PROJECTILE]]. [[EXIST]] \n However, when Diana's W is [[REFLECT]]ed, the orbs orbit around Mel. \n However, Diana's W bonus [[SHIELD]] does not trigger if even one [[PROJECTILE]] is [[REFLECT]]ed. \n However, even if Mel [[REFLECT]]s Diana's W, holds all 3 orbs, and hits with them, the bonus [[SHIELD]] does not trigger.", 
        "W [[REFLECT]] cannot [[REFLECT]] Diana's basic attacks (normal, [[EMPOWERED]]), E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Diana's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
