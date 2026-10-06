// app/data/matchups/kaisa/kaisa_mel.ts
import type { MatchupSummary } from "../_types";

export const kaisa_mel: MatchupSummary = {
  champs: ["kaisa", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kaisa: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카이사 평타, Q(일반, [[EMPOWERED]]), W(일반, [[EMPOWERED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 카이사 [[EMPOWERED]] W의 [[CDR]] 효과는 카이사에게 발동하지 않음.", 
        "E의 [[ROOT]]으로 카이사 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Kai'Sa's basic attacks, Q (normal, [[EMPOWERED]]), and W (normal, [[EMPOWERED]]) [[PROJECTILE]]. [[EXIST]] \n However, the [[CDR]] effect of Kai'Sa's [[EMPOWERED]] W does not trigger for Kai'Sa.", 
        "E [[ROOT]] cannot interrupt Kai'Sa's R [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
