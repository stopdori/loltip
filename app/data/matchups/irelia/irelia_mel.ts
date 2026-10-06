// app/data/matchups/irelia/irelia_mel.ts
import type { MatchupSummary } from "../_types";

export const irelia_mel: MatchupSummary = {
  champs: ["irelia", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    irelia: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 이렐리아 R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 이렐리아 평타, Q, W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]] \n 단, E로 발동하는 효과는 [[REFLECT]]할 수 없지만, E1, E2 설치 경로는 막을 수 있음.", 
      "E의 [[ROOT]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Irelia's R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Irelia's basic attacks, Q, or W. [[NOT_EXIST]] \n However, effects triggered by E cannot be [[REFLECT]]ed, but the E1 and E2 placement paths can be blocked.", 
        "E [[ROOT]] cannot interrupt Irelia's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
