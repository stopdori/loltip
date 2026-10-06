// app/data/matchups/aatrox/aatrox_mel.ts
import type { MatchupSummary } from "../_types";

export const aatrox_mel: MatchupSummary = {
  champs: ["aatrox", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 아트록스 W의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 아트록스 평타, Q를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Aatrox's W [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Aatrox's basic attacks or Q. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Aatrox's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
