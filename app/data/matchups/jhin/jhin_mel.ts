// app/data/matchups/jhin/jhin_mel.ts
import type { MatchupSummary } from "../_types";

export const jhin_mel: MatchupSummary = {
  champs: ["jhin", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jhin: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 진 평타, Q, W, E([[TRAP]]), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 [[REFLECT]]되면 진을 표적으로 삼고. 남은 횟수만큼 [[CHAIN]] 가능. \n 단, W는 [[ROOT]] 조건을 만족하고 [[REFLECT]]돼도 [[ROOT]]은 발동하지 않음. \n 단, E는 도착 지점까지는 [[PROJECTILE]] 판정. 설치된 [[TRAP]]은 [[REFLECT]] 불가능.", 
        "E의 [[ROOT]]으로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Jhin's basic attacks, Q, W, E ([[TRAP]]), and R [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed Q targets Jhin and can [[CHAIN]] for its remaining bounces. \n However, even if W meets the [[ROOT]] condition and is [[REFLECT]]ed, the [[ROOT]] does not trigger. \n However, E counts as a [[PROJECTILE]] until it reaches its destination. A placed [[TRAP]] cannot be [[REFLECT]]ed.", 
        "E [[ROOT]] cannot interrupt Jhin's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
