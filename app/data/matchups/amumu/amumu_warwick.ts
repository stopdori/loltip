// app/data/matchups/amumu/amumu_warwick.ts
import type { MatchupSummary } from "../_types";

export const amumu_warwick: MatchupSummary = {
  champs: ["amumu", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 워윅 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 워윅 Q, R의 [[DASH]]을 따라갈 수 있음. \n 단, 워윅 R은 [[UNSTOPPABLE]] [[DASH]]로 [[STUN]]을 유예하고 공격함.", 
        "아무무 Q, R의 [[STUN]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 R의 [[STUN]]로 워윅 Q의 [[DASH]]을 끊을 수 있음. (정말 특이한 판정)",
        "아무무 Q의 [[CC_BUFFER]]로 워윅 E의 [[FEAR]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]]는 남아있음.", 

        "워윅 Q, R의 [[UNSTOPPABLE]] [[DASH]]으로 아무무 Q, R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n \n ",

        "아무무 Q와 워윅 R의 판정. \n \n 1. 서로에게 사용했을 때 \n 워윅이 데미지를 입지만 무시하고 물어뜯음. \n \n 2. 아무무 Q를 제3자에게, 워윅 R을 아무무에게 사용할 때 \n 2-1. 아무무 Q(준비단계) 도중에 워윅 R로 부딪힐 때 [[CC_BUFFER]]로 아무무가 다른 대상에게 [[DASH]]하지만 [[SUPPRESS]]당함. \n 워윅은 아무무가 있던 자리에서 계속 물어뜯고 아무무에게 데미지가 들어감. 워윅 R 100% 유효 \n 2-2. 아무무 Q(돌진단계) 도중에 워윅 R로 부딪힐 때 아무무가 그 자리에 즉시 정지하고 워윅에게 물어뜯김. 워윅 R 100% 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Warwick's Q and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Warwick's Q and R [[DASH]]. \n However, Warwick's R [[UNSTOPPABLE]] [[DASH]] delays the [[STUN]] and attacks.", "Amumu's Q and R [[STUN]] can interrupt Warwick's R [[SKILL_CHANNEL]].", "Amumu's R [[STUN]] can interrupt Warwick's Q [[DASH]]. (very unusual interaction)", "Amumu's Q [[CC_BUFFER]] can ignore Warwick's E [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies.", "Warwick's Q and R [[UNSTOPPABLE]] [[DASH]] can ignore Amumu's Q and R [[STUN]] and continue [[DASH]]. \n \n ", "Amumu's Q vs Warwick's R \n \n 1. When they target each other: \n Warwick takes damage but ignores it and bites. \n \n 2. When Amumu casts Q on a third party and Warwick casts R on Amumu: \n 2-1. If Warwick's R collides during Amumu's Q (charge phase), [[CC_BUFFER]] allows Amumu to [[DASH]] to the other target but gets [[SUPPRESS]]ed. \n Warwick continues biting where Amumu was and damage is dealt to Amumu. Warwick's R applies 100%. \n 2-2. If Warwick's R collides during Amumu's Q (dash phase), Amumu immediately stops and gets bitten by Warwick. Warwick's R applies 100%."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
