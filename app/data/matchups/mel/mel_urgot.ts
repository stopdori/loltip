// app/data/matchups/mel/mel_urgot.ts
import type { MatchupSummary } from "../_types";

export const mel_urgot: MatchupSummary = {
  champs: ["mel", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 우르곳 평타, Q, W(일반), R1의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 도착 지점까지는 [[PROJECTILE]] 판정. 도착한 [[ZONE]] [[DETONATE]]은 [[REFLECT]] 불가능. \n 단, [[REFLECT]]된 R1에 적중당한 대상이 죽거나, 지속시간이 종료 됐을 때 R2의 [[SUPPRESS]] [[EXECUTE]]이 발동. [[CLIP:https://www.youtube.com/shorts/vbnJcxK43dE]]", 
        "W의 [[REFLECT]]로 우르곳 R2의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 즉, R2의 [[SUPPRESS]], [[EXECUTE]] 효과가 발동하지 않음. [[CLIP:https://www.youtube.com/shorts/o-F37FU-oGA]]", 
        "W의 [[REFLECT]]로 우르곳 Q([[DETONATE]]), W([[EMPOWERED]]), E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]] \n 단, W([[EMPOWERED]])는 멜이 W의 [[REFLECT]] 상태일 때 발동 자체가 일어나지 않음.", 
      "E의 [[ROOT]]으로 우르곳 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Urgot's basic attacks, Q, W (normal), and R1 [[PROJECTILE]]. [[EXIST]] \n However, Q counts as a [[PROJECTILE]] until it reaches its destination. The [[ZONE]] [[DETONATE]] at the destination cannot be [[REFLECT]]ed. \n However, when the target hit by the [[REFLECT]]ed R1 dies or its duration ends, R2's [[SUPPRESS]] [[EXECUTE]] triggers. [[CLIP:https://www.youtube.com/shorts/vbnJcxK43dE]]", 
        "W [[REFLECT]] can block Urgot's R2 [[PROJECTILE]]. [[EXIST]] \n In other words, R2's [[SUPPRESS]] and [[EXECUTE]] effects do not trigger. [[CLIP:https://www.youtube.com/shorts/o-F37FU-oGA]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Urgot's Q ([[DETONATE]]), W ([[EMPOWERED]]), or E. [[NOT_EXIST]] \n However, W ([[EMPOWERED]]) does not trigger at all while Mel's W [[REFLECT]] is active.", 
        "E [[ROOT]] cannot interrupt Urgot's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
