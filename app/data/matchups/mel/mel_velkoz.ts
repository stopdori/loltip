// app/data/matchups/mel/mel_velkoz.ts
import type { MatchupSummary } from "../_types";

export const mel_velkoz: MatchupSummary = {
  champs: ["mel", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 벨코즈 Q1, Q2, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 벨코즈 P의 [[DEBUFF_STACK]]도 함께 [[REFLECT]]되고 조건을 충족하면 발동. \n 단, W는 [[REFLECT]]되기 전의 상태와 상관없이 멜에게서 새로 생성되는 판정. \n 단, E는 도착 지점까지는 [[PROJECTILE]] 판정. 도착한 [[ZONE]]은 [[REFLECT]] 불가능.", 
        "W의 [[REFLECT]]로 벨코즈 평타, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Vel'Koz's Q1, Q2, W, and E [[PROJECTILE]]. [[EXIST]] \n However, Vel'Koz's P [[DEBUFF_STACK]] is also [[REFLECT]]ed and triggers when its condition is met. \n However, W is newly created from Mel, regardless of its state before being [[REFLECT]]ed. \n However, E counts as a [[PROJECTILE]] until it reaches its destination. The [[ZONE]] at the destination cannot be [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Vel'Koz's basic attacks or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Vel'Koz's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
