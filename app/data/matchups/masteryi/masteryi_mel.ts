// app/data/matchups/masteryi/masteryi_mel.ts
import type { MatchupSummary } from "../_types";

export const masteryi_mel: MatchupSummary = {
  champs: ["masteryi", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    masteryi: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 마스터 이 평타, Q, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 마스터 이 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Master Yi's basic attacks, Q, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Master Yi's W [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
