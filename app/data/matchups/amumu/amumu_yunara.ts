// app/data/matchups/amumu/amumu_yunara.ts
import type { MatchupSummary } from "../_types";

export const amumu_yunara: MatchupSummary = {
  champs: ["amumu", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 유나라 RE의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Yunara's RE [[DASH]].", "R [[STUN]] can interrupt Yunara's RE [[DASH]]."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
