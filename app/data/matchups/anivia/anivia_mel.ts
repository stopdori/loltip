// app/data/matchups/anivia/anivia_mel.ts
import type { MatchupSummary } from "../_types";

export const anivia_mel: MatchupSummary = {
  champs: ["anivia", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 애니비아 평타, Q, E의 [[PROJECTILE]]를 반사 할 수 있음. [[EXIST]] \n 단, 애니비아 Q를 [[REFLECT]]했을 때 멜이 Q2를 사용할 수 없음. [[NOT_EXIST]] \n 즉, 사거리 끝에 도달하면 자동 [[DETONATE]].", 
        "W의 [[REFLECT]]로 애니비아 W([[TERRAIN]] 생성), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can reflect Anivia's basic attacks, Q, and E [[PROJECTILE]]. [[EXIST]] \n However, when Anivia's Q is [[REFLECT]]ed, Mel cannot use Q2. [[NOT_EXIST]] \n In other words, it automatically [[DETONATE]]s at max range.", 
        "W [[REFLECT]] cannot [[REFLECT]] Anivia's W ([[TERRAIN]] creation) or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Anivia's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
