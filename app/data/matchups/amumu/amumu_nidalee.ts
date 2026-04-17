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
      ko: ["아무무 Q의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아무무 R의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Nidalee's Cougar form W [[DASH]]. \n However, the [[STUN]] still applies.", "Amumu's R [[STUN]] can interrupt Nidalee's Cougar form W [[DASH]]."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
