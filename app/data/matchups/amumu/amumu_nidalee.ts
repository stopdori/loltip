// app/data/matchups/amumu/amumu_nidalee.ts
import type { MatchupSummary } from "../_types";

export const amumu_nidalee: MatchupSummary = {
  champs: ["amumu", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Nidalee's Cougar form W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Nidalee's Cougar form W [[DASH]]."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
