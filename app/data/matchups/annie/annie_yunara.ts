// app/data/matchups/annie/annie_yunara.ts
import type { MatchupSummary } from "../_types";

export const annie_yunara: MatchupSummary = {
  champs: ["annie", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 유나라 W의 [[PROJECTILE]]를 잠깐 막을 수 있음. \n 단, 결국 W는 최대 사정거리까지 도달함."],
      en: ["P [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can briefly block Yunara's W [[PROJECTILE]]. \n However, W will eventually reach its maximum range."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
