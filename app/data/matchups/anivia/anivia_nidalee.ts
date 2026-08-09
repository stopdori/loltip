// app/data/matchups/anivia/anivia_nidalee.ts
import type { MatchupSummary } from "../_types";

export const anivia_nidalee: MatchupSummary = {
  champs: ["anivia", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Nidalee's cougar form W [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Nidalee's cougar form W [[DASH]]."],
    },
    nidalee: {
      ko: ["니달리 인간폼 Q, W의 표식이 남아있을 때, 애니비아가 P(알)로 변해도 표식은 남아있음."],
      en: ["Nidalee's human form Q and W marks remain on Anivia even after she transforms into P (Egg)."],
    },
  },
};
