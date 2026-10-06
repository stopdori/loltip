// app/data/matchups/akshan/akshan_mel.ts
import type { MatchupSummary } from "../_types";

export const akshan_mel: MatchupSummary = {
  champs: ["akshan", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아크샨 평타, Q, E, R의 [[PROJECTILE]]를 반사할 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 아크샨 E의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 아크샨 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can reflect Akshan's basic attacks, Q, E, and R [[PROJECTILE]]. [[EXIST]]", 
        "E [[ROOT]] can interrupt Akshan's E [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Akshan's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
