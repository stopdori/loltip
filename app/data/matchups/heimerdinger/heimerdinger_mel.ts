// app/data/matchups/heimerdinger/heimerdinger_mel.ts
import type { MatchupSummary } from "../_types";

export const heimerdinger_mel: MatchupSummary = {
  champs: ["heimerdinger", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    heimerdinger: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 하이머딩거 평타, 일반(Q, Q 충전 공격, W, E), [[EMPOWERED]](Q, Q 충전 공격, W, E)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q(포탑)의 일반 공격은 [[REFLECT]]된 공격이 포탑에게만 돌아감.", 
        "W의 [[REFLECT]]로 하이머딩거 E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Heimerdinger's basic attacks, normal (Q, Q charged attack, W, E), and [[EMPOWERED]] (Q, Q charged attack, W, E) [[PROJECTILE]]. [[EXIST]] \n However, for Q (turret) normal attacks, the [[REFLECT]]ed attack returns only to the turret.", 
        "W [[REFLECT]] cannot [[REFLECT]] Heimerdinger's E or R. [[NOT_EXIST]]"],
    },
  },
};
