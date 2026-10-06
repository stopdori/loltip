// app/data/matchups/mel/mel_sylas.ts
import type { MatchupSummary } from "../_types";

export const mel_sylas: MatchupSummary = {
  champs: ["mel", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 사일러스 E2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]한 E2가 적중하면 대상에게 데미지와 [[AIRBORNE]]이 유효하고, 멜이 대상에게 [[DASH]].", 
        "W의 [[REFLECT]]로 사일러스 R(훔치기)의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 단, 사일러스 R의 대상이 되거나 다른대상 경로에서 [[REFLECT]]를 사용해도 막을 수 있음. \n 이때, 사일러스 R의 [[COOLDOWN]]은 소모되고 훔치지 못함.", 
        "W의 [[REFLECT]]로 사일러스 평타(일반, [[EMPOWERED]]), W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 사일러스 W, E, E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Sylas's E2 [[PROJECTILE]]. [[EXIST]] \n However, if the [[REFLECT]]ed E2 hits, the damage and [[AIRBORNE]] apply to the target, and Mel [[DASH]]es to the target.", 
        "W [[REFLECT]] can block Sylas's R (Hijack) [[PROJECTILE]]. [[EXIST]] \n However, it can be blocked whether Mel is the R target or uses [[REFLECT]] in the path toward another target. \n In this case, Sylas's R [[COOLDOWN]] is consumed and he cannot steal the ultimate.", 
        "W [[REFLECT]] cannot [[REFLECT]] Sylas's basic attacks (normal, [[EMPOWERED]]) or W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Sylas's W, E, and E2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
