// app/data/matchups/amumu/amumu_kaisa.ts
import type { MatchupSummary } from "../_types";

export const amumu_kaisa: MatchupSummary = {
  champs: ["amumu", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 카이사 R의 [[DASH]]을 따라갈 수 있음. (이론상)", 
        "R의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kai'Sa's R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kai'Sa's R [[DASH]]. (theoretically)", "R [[STUN]] can interrupt Kai'Sa's R [[DASH]]."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
