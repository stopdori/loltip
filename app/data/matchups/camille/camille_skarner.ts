// app/data/matchups/camille/camille_skarner.ts
import type { MatchupSummary } from "../_types";

export const camille_skarner: MatchupSummary = {
  champs: ["camille", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 스카너 E의 [[SUPPRESS]] [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로도 스카너 R의 [[SUPPRESS]]을 무시할 수 없음.", 
      "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 스카너 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
      "R의 [[UNTARGETABLE]]로 스카너 Q1, Q2, W(폭발 피해), E, R을 피할 수 있음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Skarner's E [[SUPPRESS]] [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Skarner's R [[SUPPRESS]] either.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Skarner's E [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Skarner's Q1, Q2, W (explosion damage), E, and R."],
    },
    skarner: {
      ko: ["E, R의 [[SUPPRESS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Skarner's E and R [[SUPPRESS]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["특이한 판정 \n E1( 투척 단계 )의 [[CC_BUFFER]]로 스카너 E의 [[SUPPRESS]], [[STUN]]을 2가지 조건을 만족하는 경우에 무시하고 [[DASH]]할 수 있음. \n \n 1. 카밀 E의 갈고리를 최대한 멀리 발사해야 함. \n 2. 스카너 E의 [[SUPPRESS]] [[DASH]]의 거리가 최대한 짧아야 함. \n 두 조건이 만족해야 [[CC_BUFFER]] 발동 가능성이 높음. \n 단, 이마저도 스카너가 [[SUPPRESS]] 시간을 최대한 길게 유지하고 [[STUN]]을 걸면 무시 불가능. [[CLIP:https://www.youtube.com/shorts/48dIdOjh-JA]] \n 즉, 스카너 손에 달려있다."],
    en: ["Unusual interaction \n Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Skarner's E [[SUPPRESS]], [[STUN]] and [[DASH]] when both of the following conditions are met. \n \n 1. Camille's E grapple hook must be thrown as far as possible. \n 2. Skarner's E [[SUPPRESS]] [[DASH]] distance must be as short as possible. \n Both conditions must be met for the [[CC_BUFFER]] to have a high chance of triggering. \n However, even then, if Skarner holds the [[SUPPRESS]] duration as long as possible and applies the [[STUN]], it cannot be ignored. [[CLIP:https://www.youtube.com/shorts/48dIdOjh-JA]] \n In other words, it's up to Skarner."],
  },
};
