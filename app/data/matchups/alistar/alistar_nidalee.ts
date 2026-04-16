// app/data/matchups/alistar/alistar_nidalee.ts
import type { MatchupSummary } from "../_types";

export const alistar_nidalee: MatchupSummary = {
  champs: ["alistar", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Nidalee's Cougar form W [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Nidalee's Cougar form W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
